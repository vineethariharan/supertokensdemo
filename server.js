const express = require('express'); //Line 1
const port = process.env.PORT || 5000; //Line 3

let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");
let {Github} = ThirdPartyEmailPassword;
let cors = require("cors");
let {middleware} = require("supertokens-node/framework/express");

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://try.supertokens.io",
        apiKey: "<REQUIRED FOR MANAGED SERVICE, ELSE YOU CAN REMOVE THIS FIELD>"
    },
    appInfo: {
        // learn more about this on https://supertokens.io/docs/thirdpartyemailpassword/appinfo
        appName: "My Awesome App", // TODO: Name of your application,
        apiDomain: "http://localhost:8080", // TODO: URL of the API domain, without any path,
        websiteDomain: "http://localhost:3001" // TODO: URL of the website domain, without any path,
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                Github({
                    clientSecret: "",
                    clientId: ""
                })
            ]
        }),
        Session.init() // initializes session features
    ]
});

supertokens.init() // from step 2

let app = express();

// ...other middlewares
app.use(cors({
    origin: "http://localhost:3001",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

app.use(middleware());

let {errorHandler} = require("supertokens-node/framework/express");
// ...your API routes

app.use(errorHandler())

// your own error handler
app.use((err, req, res, next) => {});

let { verifySession } = require("supertokens-node/recipe/session/framework/express");



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


app.get("/userId", verifySession(), (req, res) => {
	let userId = req.session.getUserId();
	res.send(userId);
});