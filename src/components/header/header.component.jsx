import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from '../../components/card-icon/card-icon.component';
import CartDropDown from '../../components/card-dropdown/card-dropdown.component';

//to connect and get data form Redux
import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="container" to="/">
      <Logo />
      {currentUser ? <span>{currentUser.displayName}</span> : ""}
    </Link>

    <div className="options">
      <Link className="option" to="/dashboard">
        DASHBOARD
      </Link>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    { hidden ? null : <CartDropDown />}
      
  </div>
);

//export default Header; - will be changed after reduce

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
