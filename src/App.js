import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {sendDataObj , getDataObj} from './store/cart-thunk'

let isInitial = true;

function App() {
  const shownCart = useSelector((state) => state.ui.shownCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataObj())
  } ,[dispatch])


  useEffect(() => {

    if  (isInitial) {
      isInitial = false
      return
    }
    if (cart.changed) {
      dispatch(sendDataObj(cart)) 
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {shownCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
