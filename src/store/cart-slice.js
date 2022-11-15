import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [], totalQuantity: 0 , changed : false},
  reducers: {
    replaceCart(state , action){
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    addToCart(state, action) {
      const Newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === Newitem.id);
      state.changed = true
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: Newitem.id,
          name: Newitem.title,
          price: Newitem.price,
          Amount: 1,
          totalPrice: Newitem.price,
        });
      } else {
        existingItem.Amount++;
        existingItem.totalPrice = existingItem.totalPrice + Newitem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true
      state.totalQuantity--;
      if (existingItem.Amount === 1) {
        state.items =  state.items.filter((item) => item.id !== id);
      } else {
        existingItem.Amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice;
