import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData,fetchCartData } from './store/cart-actions';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

let isInitial=true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(function (state) {
    return state.ui.cartIsVisible
  })

  const cart = useSelector(function (state) { return state.cart })
  const notification = useSelector(function (state) { return state.ui.notification })

  useEffect(function(){
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(function () {
    if(isInitial){
      isInitial=false
      return
    }

    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])
  return (
    <>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title}></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
