/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';

export default function DetailsDate(props) {
  const {
    userDetails,
  } = props;

  console.log(userDetails);

  return (
    <NextDeliveries>
      <h3>Próximas entregas: </h3>
      <h4>dd/mm/aaaa</h4>
    </NextDeliveries>
  );
}

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
