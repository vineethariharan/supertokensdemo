import React, {useState} from 'react';
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
Session.addAxiosInterceptors(axios);

const Home = () => {
	const [userId, setUserId] = useState();

	const fetchUserId = () => {
		axios.get('http://localhost:5000/userId').then((response) =>{
			setUserId(response.data);
		});
	};

	const onSignOut = () => {
		signOut().then(()=>{
			window.location.href = "/";
		});
		
}


	return (
		<div>
			<button type="button" onClick={fetchUserId}>Get UserId</button>
			<div>{userId}</div>
			<button type="button" onClick={onSignOut}>Sign Out</button>
		</div>
	);
};

export default Home;