/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import imgAdress from '../assets/image03.jpg';

export default function Details() {
  return (
    <Container>
      <h1>Bom te ver por aqui, @User.</h1>
      <h2>"Agradecer é arte de atrair coisas boas"</h2>
      <ShowDetails>
        <img src={imgAdress} alt="pessoa meditando"/>
        <PlanType>
          <h3>Plano: </h3>
          <h4>@tipo_de_plano</h4>
        </PlanType>

        <SignatureDate>
          <h3>Data da assinatura: </h3>
          <h4> dd/mm/aa</h4>
        </SignatureDate>

        <NextDeliveries>
          <h3>Próximas entregas: </h3>
          <h4>dd/mm/aaaa</h4>
          <h4>dd/mm/aaaa</h4>
          <h4>dd/mm/aaaa</h4>
        </NextDeliveries>

        <PlanProducts>
          <h5>Chás</h5>
          <h5>Produtos Orgânicos</h5>
          <h5>Incensos</h5>
        </PlanProducts>

      </ShowDetails>
      <button>Avaliar entregas</button>
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
    margin: 0 auto;
  }
  button{
    width: 237px;
    height: 56px;
    background: #8C97EA;
    border-color: #8C97EA;
    border-radius: 10px;
    margin: 31px auto 23px auto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    font-family: Roboto;
    text-align: center;
  }
`;

const ShowDetails = styled.div`
  width: 356px;
  height: 382px;
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
`;
const PlanType = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;
  width: 270px;
  h3{
    color: #4D65A8;
  }
  h4{
    color: #E63C80;
  }
`;

const SignatureDate = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 270px;
  justify-content: space-around;
  h3{
    color: #4D65A8;
  }
  h4{
    color: #E63C80;
  }
`;

const NextDeliveries = styled.div`
  display: flex;
  flex-direction: column;
  h3{
      color: #4D65A8;
  }
  h4{
      width: 270px;
      text-align: end;
      color: #E63C80;
      margin-bottom: 10px;
  }
`;

const PlanProducts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  h5{
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #E63C80;
  }
`;
