import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SuperTokens from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.io/docs/thirdpartyemailpassword/appinfo
        appName: "My Awesome App", // TODO: Name of your application,
        apiDomain: "http://localhost:5000", // TODO: URL of the API domain, without any path,
        websiteDomain: "http://localhost:3001" // TODO: URL of the website domain, without any path,
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init()
                ]
            }
        }),
        Session.init()
    ]
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

