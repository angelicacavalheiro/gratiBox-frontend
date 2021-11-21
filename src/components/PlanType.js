/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import imgAdress from '../assets/image02.jpg';

export default function Details() {
  return (
    <Container>
      <h1>Bom te ver por aqui, @User.</h1>
      <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      <ShowPlan>
        <img src={imgAdress} alt="pessoa meditando"/>
        <PlanType>
          <h3>Você recebe um box por semana.
          Ideal para quem quer exercer a sua gratidão todos os dias
          </h3>
          <button>Assinar</button>
        </PlanType>
      </ShowPlan>
      <ShowPlan>
        <img src={imgAdress} alt="pessoa meditando"/>
        <PlanType>
          <h3>Você recebe um box por mês. <br/>Ideal para quem está começando agora</h3>
          <button>Assinar</button>
        </PlanType>
      </ShowPlan>
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
    margin: 0 auto 30px auto;
  }
  button{
    width: 168px;
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
  }
`;

const ShowPlan = styled.div`
  width: 356px;
  height: 382px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  background-color: #E5CDB3;
  margin: 0 auto 30px auto;

  img{
    width: 300px;
    height: 172px;
    border-radius: 25px;
  }
`;
const PlanType = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  h3{
    color: #4D65A8;
  }
  h4{
    color: #E63C80;
  }
`;
