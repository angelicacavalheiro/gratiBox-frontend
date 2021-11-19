/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import Details from './components/Details';
import Plan from './components/Plan';
import PlanType from './components/PlanType';

export default function App() {
  return (

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
          <Details />
        </Route>

        <Route path="/sign-plan" exact>
          <Plan />
        </Route>

        <Route path="/planType" exact>
          <PlanType />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
