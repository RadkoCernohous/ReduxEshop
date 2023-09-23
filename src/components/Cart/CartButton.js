import classes from './CartButton.module.css';

import {useSelector } from 'react-redux/es/hooks/useSelector';

const CartButton = (props) => {
  const cartQuantity=useSelector(function(state){
    return state.cart.totalQuantity
  })
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
