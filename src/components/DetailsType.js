/* eslint-disable no-trailing-spaces */
import styled from 'styled-components';

export default function DetailsType(props) {
  const {
    userDetails,
  } = props;

  return (

    <PlanType>
        {
          ((userDetails.type === 'weekly')
            ? <> <h3>Plano:</h3> <h4>semanal</h4></>
            : <><h3>Plano:</h3> <h4>mensal</h4></>)
        }
    </PlanType>
  );
}

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
