import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // eslint-disable-next-line 
  Route,
  // eslint-disable-next-line 
  Link
} from "react-router-dom";
// eslint-disable-next-line 
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import {ThirdPartyEmailPasswordAuth} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import Home from './Home';


function App() {

  return (
    <Router>
        <Switch>
            {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
            <Route path="/">
              <ThirdPartyEmailPasswordAuth>
                  <Home />
              </ThirdPartyEmailPasswordAuth>
            </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
