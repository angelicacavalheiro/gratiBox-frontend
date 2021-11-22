/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Swal from 'sweetalert2';
import imgAdress from '../assets/image03.jpg';
import ShowAvailableDeliveryDates from './ShowAvailableDeliveryDates';
import UserContext from '../contexts/UserContext';
import { postPlan } from '../service';

export default function Details() {
  const history = useHistory();
  const [showPlansType, setshowPlansType] = useState(false);
  const [showDeliveryDate, setshowDeliveryDate] = useState(false);
  const [planType, setPlanType] = useState('');
  const [delivery, setDelivery] = useState('');
  const [product, setProduct] = useState('');
  const [cha, setCha] = useState('');
  const [incenso, setIncenso] = useState('');
  const [organicos, setOrganicos] = useState('');
  const { user } = useContext(UserContext);
  const { token } = user;

  const body = {
    delivery,
    planType,
    product,
    token,
  };

  function togglePlansType(event) {
    event.stopPropagation();
    if (showPlansType === true) {
      setshowPlansType(false);
    } else {
      setshowPlansType(true);
    }
  }

  function toggleDeliveryDate(event) {
    event.stopPropagation();
    if (showDeliveryDate === true) {
      setshowDeliveryDate(false);
    } else {
      setshowDeliveryDate(true);
    }
  }

  function defineProductPackage() {
    if (cha && incenso && organicos) {
      setProduct('cha, incenso, organicos');
    } else if (!cha && incenso && organicos) {
      setProduct('incenso, organicos');
    } else if (cha && !incenso && organicos) {
      setProduct('cha, organicos');
    } else if (cha && incenso && !organicos) {
      setProduct('cha, incenso');
    } else if (!cha && !incenso && organicos) {
      setProduct('organicos');
    } else if (!cha && incenso && !organicos) {
      setProduct('incenso');
    } else if (cha && !incenso && !organicos) {
      setProduct('cha');
    } else {
      setProduct('');
    }
  }

  function postSignPlan() {
    if (!product) {
      return ('continue');
    }
    postPlan(body)
      .then(() => {
        history.push('/adress');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro de servidor',
        });
      });
    return ('continue');
  }

  useEffect(() => {
    postSignPlan();
  }, [product]);

  return (
    <Container>
      <h1>Bom te ver por aqui, {user.name}.</h1>
      <h2>"Agradecer é arte de atrair coisas boas"</h2>
      <Options>
        <img src={imgAdress} alt="pessoa meditando"/>
        <PlanType>
            <h3>Plano: </h3>
            <MdKeyboardArrowDownStyled onClick={(event) => togglePlansType(event)} />
        </PlanType>
        {
          (showPlansType === true)
            ? <ShowPlansType>
                <h3 onClick={() => setPlanType('weekly')}>semanal</h3>
                <h3 onClick={() => setPlanType('monthly')}>mensal</h3>
              </ShowPlansType>
            : null
        }
        <Delivery>
            <h3>Entrega </h3>
            <MdKeyboardArrowDownStyled onClick={(event) => toggleDeliveryDate(event)} />
        </Delivery>
        {
          (showDeliveryDate === true)
            ? <ShowAvailableDeliveryDates
                setDelivery={setDelivery}
                showDeliveryDate={showDeliveryDate}
                planType={planType}
              />
            : null
        }
        <Products>
            <h3> Quero receber </h3>
            <div>
              <p>
                <input type="checkbox" id="Chás"
                  onClick={() => ((cha === '') ? setCha('cha') : setCha(''))}
                />
                <h4> Chás </h4>
                <input type="checkbox" id="Incesos"
                  onClick={() => ((incenso === '') ? setIncenso('incenso') : setIncenso(''))}
                />
                <h4> Incesos </h4>
              </p>
              <p>
                <input type="checkbox" id="Produtos orgânicos"
                  onClick={() => ((organicos === '') ? setOrganicos('organicos') : setOrganicos(''))}
                />
                <h4> Produtos orgânicos </h4>
              </p>
            </div>
        </Products>
      </Options>
      <button onClick={() => defineProductPackage()}> Próximo </button>
    </Container>
  );
}

const ShowPlansType = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 8px;
  width: 290px;
  height: 44px;
  border-radius: 0px 0px 10px 10px;
  background-color: #F6D353;
  margin-bottom: 7px;
  margin-top: -10px;
  h3{
    padding-top: 10px;
    color: #54240D;
    cursor: pointer;
  }
`;

const MdKeyboardArrowDownStyled = styled(MdKeyboardArrowDown)`
  color: #4D65A8;
  font-size: 35px;
  height: 44px;
  cursor: pointer;
`;

const Container = styled.div`
  font-family: Roboto;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    width: 341px;
    height: 42px;
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
    cursor: pointer;
  }
`;

const Options = styled.div`
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
`;

const PlanType = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 8px;
  width: 290px;
  height: 44px;
  border-radius: 5px;
  background-color: #E0D1ED;
  margin-bottom: 7px;
  h3{
    padding-top: 10px;
    color: #4D65A8;
  }
`;

const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 8px;
  width: 290px;
  height: 44px;
  border-radius: 5px;
  background-color: #E0D1ED;
  margin-bottom: 7px;
  h3{
    padding-top: 10px;
    color: #4D65A8;
  }
  h4{
    color: #E63C80;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 8px;
  width: 290px;
  height: 111px;
  border-radius: 5px;
  background-color: #E0D1ED;
  div{
    display: flex;
    flex-direction: column;
  }
  p{
    display: flex;
  }
  h3{
    color: #4D65A8;
    margin-bottom: 15px;
    padding-top: 10px;
  }
  h4{
    font-weight: normal;
    width: 270px;
    color: #4D65A8;
    margin-bottom: 5px;
  }
`;
