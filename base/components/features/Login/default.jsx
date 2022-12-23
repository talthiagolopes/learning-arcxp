import React, {useState, useEffect} from 'react';

// Components
import LoginForm from './_children/LoginForm';
import SignUpForm from './_children/SignUpForm';
import { SDKProvider } from '../utilities/subscriptions';

// Css
import './default.scss';


const Login = () => {
    const [login, setLogin] = useState(true);

    console.log("**** login", login);
 
    const toogleLogin = () => {
        setLogin(!login);
    }
 
    return(
        <SDKProvider>
            {
                login ? <LoginForm toogleLogin={toogleLogin}/> : <SignUpForm toogleLogin={toogleLogin}/>
            }
        </SDKProvider>
    )
 }

 export default Login;