import React from 'react';
import './sign-in-register.styles.scss';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';



const SignInOrRegister =() => (
    <div className ="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    
    </div>

);

export default SignInOrRegister;