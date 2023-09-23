import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const MainHeader = (props) => {
  const dispatch=useDispatch()
  const toggleCartHandler=function(){
    dispatch(uiActions.toggle())
  }
  return (
    <header className={classes.header} onClick={toggleCartHandler}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
