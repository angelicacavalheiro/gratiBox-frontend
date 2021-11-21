import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { postLogin, getUserPlan } from '../service';

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  function userLogin(event) {
    event.preventDefault();
    const body = { email, password };

    postLogin(body)
      .then((response) => {
        setUser({
          ...response.data,
        });
        const serializedUser = JSON.stringify({
          ...response.data,
        });
        localStorage.setItem('storedUser', serializedUser);
        getUserPlan(user.token)
          .then((userPlan) => {
            if (userPlan.data.length > 0) {
              history.push('/details');
            } else {
              history.push('/planType');
            }
          });
      })
      .catch((err) => {
        if (err?.response.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro de servidor',
          });
        } else if (err.response.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'E-mail/senha incorretos',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Problema no servidor',
          });
        }
      });
  }

  return (
    <Container onSubmit={userLogin}>
      <h1>Bem vindo ao GratiBox</h1>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>
        Login
      </button>
      <Link to={'/sign-up'} style={{ textDecoration: 'none', color: '#ffffff' }}>
       <h2>Ainda não sou grato</h2>
      </ Link >
    </Container>
  );
}

const Container = styled.form`
  color: #FFFFFF;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin: 101px auto 53px auto;
  }

  input{
    width: 325px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid #604848;
    border-radius: 10px;
    margin: 0 auto 8px auto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;

    ::placeholder,
    ::-webkit-input-placeholder {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: rgba(96, 72, 72, 0.4);
    }
  }

  button{
    width: 237px;
    height: 56px;
    background: #8C97EA;
    border-color: #8C97EA;
    border-radius: 10px;
    margin: 144px auto 21px auto;
    font-family: Roboto;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
  }

  h2{
    width: 214px;
    height: 29px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 0 auto 108px auto;
    cursor: pointer;
  }
`;
