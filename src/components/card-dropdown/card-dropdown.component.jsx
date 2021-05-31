import React from 'react';

import './card-dropdown.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const CartDropDown =() =>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

)

export default CartDropDown;