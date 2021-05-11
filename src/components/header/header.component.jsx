import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

const Header =({currentUser}) =>(

    <div className='header'>
        <Link className='container' to ='/'>
            <Logo />
            {currentUser?
            <div className='welcome-font'>
            { (`Welcome ${currentUser.displayName}`).toUpperCase() }
            </div>
                :
            ''
            }
        </Link>
        
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>
            <Link className="option" to='/signin'>
            {

                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>
                SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            }

            </Link>
        
        </div>
    </div>

)

export default Header;