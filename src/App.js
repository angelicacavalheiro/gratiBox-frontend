import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './reset.css';
import UserContext from './contexts/UserContext';
import Home from './components/Home';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import Details from './components/Details';
import Plan from './components/Plan';
import PlanType from './components/PlanType';
import Adress from './components/Adress';
import Logout from './components/Logout';

export default function App() {
  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser);

  return (
    <UserContext.Provider value={ { user, setUser } }>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/sign-up" exact>
          <SignUpPage />
        </Route>

        <Route path="/sign-in" exact>
          <SignInPage />
        </Route>

        <Route path="/details" exact>
          <Logout />
          <Details />
        </Route>

        <Route path="/sign-plan" exact>
          <Plan />
        </Route>

        <Route path="/adress" exact>
          <Adress />
        </Route>

        <Route path="/planType" exact>
          <PlanType />
        </Route>

      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}
