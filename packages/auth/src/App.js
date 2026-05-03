import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const styleClassGenerator = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={styleClassGenerator}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={SignIn} />
            <Route exact path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
