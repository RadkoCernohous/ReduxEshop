import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Cart = (props) => {
  const cartItems=useSelector(function(state){return state.cart.items})

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(function(item){
          return(
            <CartItem key={item.id} item={{title:item.name, quantity:item.quantity, total:item.totalPrice,price:item.price, id:item.id}}></CartItem>
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
