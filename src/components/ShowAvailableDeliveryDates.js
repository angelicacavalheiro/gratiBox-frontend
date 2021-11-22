/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';

export default function ShowAvailableDeliveryDates(props) {
  const {
    setDelivery,
    showDeliveryDate,
    planType,
  } = props;

  if ((showDeliveryDate === true) && (planType === 'weekly')) {
    return (
      <ShowDliveryOptions>
        <h3 onClick={() => setDelivery('segunda')}>segunda</h3>
        <h3 onClick={() => setDelivery('quarta')}>quarta</h3>
        <h3 onClick={() => setDelivery('sexta')}>sexta</h3>
      </ShowDliveryOptions>
    );
  } if (showDeliveryDate === true && planType === 'monthly') {
    return (
      <ShowDliveryOptions>
        <h3 onClick={() => setDelivery('01')}>Dia 01</h3>
        <h3 onClick={() => setDelivery('10')}>Dia 10</h3>
        <h3 onClick={() => setDelivery('20')}>Dia 20</h3>
      </ShowDliveryOptions>
    );
  }
  return (
      <ShowDliveryOptions>
        <h3>Escolha um tipo de plano</h3>
      </ShowDliveryOptions>
  );
}

const ShowDliveryOptions = styled.div`
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
