import { uiSliceAction } from "../store/ui-slice";
import {cartSliceAction} from './cart-slice'

export const getDataObj = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://react-http-db49d-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };

    try {
      const cartData = await getRequest();
      dispatch(cartSliceAction.replaceCart({
        items : cartData.items || [],
        totalQuantity : cartData.totalQuantity
      }))
    } catch (error) {
      console.log(error);
      dispatch(
        uiSliceAction.setNotification({
          status: "error",
          message: "error!",
          title: "sending requeste failde",
        })
      );
    }
  };
};

export const sendDataObj = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-db49d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items : cart.items , totalQuantity : cart.totalQuantity}),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
    };

    try {
      dispatch(
        uiSliceAction.setNotification({
          status: "pending",
          message: "pending ...",
          title: "sending requeste ...",
        })
      );

      await sendRequest();

      dispatch(
        uiSliceAction.setNotification({
          status: "success",
          message: "success!",
          title: "sending requeste succesfuly",
        })
      );
    } catch {
      dispatch(
        uiSliceAction.setNotification({
          status: "error",
          message: "error!",
          title: "sending requeste failde",
        })
      );
    }
  };
};
