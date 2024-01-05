import React from 'react';
import { useAuth } from './AuthContext';
import './App.css'

const SignIn = () => {
    const { signIn, user, signOut } = useAuth();
    console.log(user);


    return (
        <div>
            {user ? (
                <div>
                    <p>Signed in successfully! {user.profile.given_name}</p>
                    <button className='sign-in' onClick={signOut}>Logout</button>
                </div>

            ) : (
                <div>
                    <div>
                        <img src='https://pharma-release.server247.info/assets/Amnil%20Logo-548bea27.png' alt='logo'/>
                    </div>
                    <button className='sign-in' onClick={signIn}>Login With SSO</button>
                </div>
            )}
        </div>
    );
};

export default SignIn;