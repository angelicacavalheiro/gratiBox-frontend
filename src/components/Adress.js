/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import imgAdress from '../assets/image03.jpg';
import { postAdress } from '../service';

export default function Adress() {
  const { user } = useContext(UserContext);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const { token } = user;
  const history = useHistory();

  const body = {
    cep,
    state,
    city,
    street,
    number,
    token,
  };

  function postAdresses(e) {
    e.preventDefault();
    console.log(body);
    postAdress(body)
      .then(() => {
        history.push('/details');
      })
      .catch((error) => {
        console.log(error);
        return (
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro de servidor',
          }));
      });
  }

  return (
    <Container onSubmit={(e) => postAdresses(e)}>
      <h1>Bom te ver por aqui, {user.name}.</h1>
      <h2>"Agradecer é arte de atrair coisas boas"</h2>
      <AdressInputs>
        <img src={imgAdress} alt="pessoa meditando"/>
        <input
          type="text"
          minlength="1"
          maxlength="30"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          minlength="1"
          maxlength="30"
          placeholder="Endereço de entrega"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <input
          type="text"
          minlength="1"
          maxlength="4"
          placeholder="Numero da residência"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <input
          type="text"
          minlength="5"
          maxlength="11"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />

        <input
        type="text"
        minlength="1"
        maxlength="30"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        />

        <input
        type="text"
        minlength="1"
        maxlength="2"
        placeholder="Estado"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
        />

      </AdressInputs>
      <Button>Finalizar</Button>
    </Container>
  );
}

const AdressInputs = styled.div`
  width: 356px;
  height: 429px;
  background: pink;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  background-color: #ffffff;

  img{
    width: 300px;
    height: 172px;
    border-radius: 25px;
  }

  input{
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    width: 290px;
    height: 44px;
    border-radius: 5px;
    background-color: #E0D1ED;
    border-color: #E0D1ED;
    margin-bottom: 7px;
    text-align: start;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
      ::placeholder,
      ::-webkit-input-placeholder {
        color: #4D65A8;
    }
  }
  h3{
    padding-top: 10px;
  }
`;

const Container = styled.form`
  font-family: Roboto;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    width: 341px;
    height: 45px;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    margin: 101px auto 22px auto;
  }
  h2{
    width: 333px;
    height: 33px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin: 0 auto;
  }
`;

const Button = styled.button`
  width: 202px;
  height: 39px;
  background: #8C97EA;
  border-color: #8C97EA;
  border-radius: 10px;
  margin: 31px auto 23px auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
  font-family: Roboto;
  text-align: center;
`;
