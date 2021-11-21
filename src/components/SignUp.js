/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import postSignUp from '../service';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  function userSignUp(event) {
    event.preventDefault();

    if (password !== passwordConfirm) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas precisam ser iguais',
      });
      return;
    }
    const body = {
      email,
      password,
      name,
    };

    postSignUp(body)
      .then(() => {
        history.push('/sign-in');
      })
      .catch((err) => {
        if (err.response.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O e-mail inserido já está cadastrado.',

          });
        } else if (err.response.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro de servidor',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          });
        }
      });
  }

  return (
    <Container onSubmit={userSignUp}>
      <h1>Bem vindo ao GratiBox</h1>
      <input
        placeholder='Nome'
        type='username'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder='Senha'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        placeholder='Confirmar senha'
        type='password'
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      <button>
        <Link to={'/sign-in'} style={{ textDecoration: 'none' }}/>
        Cadastrar
      </button>
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
    margin: 68px auto 21px auto;
    font-family: Roboto;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}
`;
