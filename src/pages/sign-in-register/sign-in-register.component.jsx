import React from 'react';
import './sign-in-register.styles.scss';

import SignIn from '../../components/signin/signin.component';

import {signInwithGoogle} from '../../firebase/firebase.utils.js';

const SignInOrRegister =() => (
    <div className ="signinregister">
        <SignIn />
    
    </div>

);

export default SignInOrRegister;