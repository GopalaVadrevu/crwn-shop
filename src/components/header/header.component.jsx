import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

//to connect and get data form Redux
import {connect} from 'react-redux';

const Header =({currentUser}) =>(

    
    
    <div className='header'>
        
        <Link className='container' to ='/'>
            <Logo />
        </Link>
    
        <div className="options">
             <Link className="option" to='/dashboard'>
                 DASHBOARD
             </Link>
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

);

//export default Header; - will be changed after reduce

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);