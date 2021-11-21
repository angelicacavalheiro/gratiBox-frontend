/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgAdress from '../assets/image05.jpg';

export default function Home() {
  return (
  <Container>
    <h1>Bem vindo ao GratiBox</h1>
    <h2>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</h2>
    <Center>
      <button>
        <Link to= { '/sign-up' } style= { { textDecoration: 'none', color: '#ffffff' } } >
            Quero Começar
        </Link>
      </button>
        <h3>
          <Link to={ '/sign-in' } style= { { textDecoration: 'none', color: '#ffffff' } } >
              Já sou grato
          </Link>
        </h3>
    </Center>
  </Container>
  );
}

const Container = styled.div`
  font-family: Roboto;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    width: 341px;
    height: 29px;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin: 53px auto 44px auto;
  }
  h2{
    margin: 0 auto;
    width: 341px;
    height: 92px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
`;

const Center = styled.div`
  font-family: Roboto;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${imgAdress});
  width: 410px;
  height: 525px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  button{
    width: 202px;
    height: 45px;
    background: #8C97EA;
    border-radius: 10px;
    border-color: #8C97EA;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 420px auto 0 auto;
    cursor: pointer;
  }

  h3{
    width: 180px;
    height: 28px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 17px auto 10px auto;
    cursor: pointer;
  }
`;
