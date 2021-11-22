import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { postLogout } from '../service';

export default function Logout() {
  const { user, setUser } = useContext(UserContext);
  const { token } = user;
  const history = useHistory();

  function logoutRedirect() {
    postLogout(token)
      .then(() => {
        localStorage.clear();
        setUser([]);
        window.location.reload();
        history.push('/sign-in');
      })
      .catch((err) => {
        alert(err.response.status);
      });
  }
  return (
    <LogoutIcon onClick={logoutRedirect} />
  );
}

const LogoutIcon = styled(AiOutlineLogout)`
    color: #000000;
    width: 35px;
    height: 45px;
    margin-left: 350px;
    background: #FFFFFF;
    border-radius: 8px;
    font-size: 19px;
    cursor: pointer;
`;
