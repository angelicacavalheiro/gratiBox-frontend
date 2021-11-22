/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import imgAdress from '../assets/image03.jpg';
import { getUserPlan } from '../service';
import DetailsType from './DetailsType';

export default function Details() {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    getUserPlan(user.token)
      .then((userPlan) => {
        setUserDetails(userPlan.data[0]);
      });
  }, [user]);

  return (
    <Container>
      <h1>Bom te ver por aqui, {user.name}.</h1>
      <h2>"Agradecer é arte de atrair coisas boas"</h2>
      <ShowDetails>
        <img src={imgAdress} alt="pessoa meditando"/>
          {
            userDetails !== ''
              ? <>
                  <DetailsType userDetails={userDetails}/>
                  <SignatureDate>
                    <h3>Data da assinatura: </h3>
                    <h4> {userDetails.date} </h4>
                  </SignatureDate>
                  <PlanProducts>
                    <><h3>produtos:</h3> <h5>{userDetails.product}</h5></>
                  </PlanProducts>
                </>
              : ''
          }
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
    height: 45px;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    margin: 50px auto 22px auto;
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

const PlanProducts = styled.div`
  display: flex;
  justify-content: space-around;
  width: 340px;
  h3{
    color: #4D65A8;
  }
  h5{
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #E63C80;
  }
`;
