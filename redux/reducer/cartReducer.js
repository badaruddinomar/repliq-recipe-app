import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isItemExist = state.productList.find(
        (item) => item.productId === newItem.productId
      );

      if (isItemExist) {
        state.productList = state.productList.map((item) => {
          return item.productId === isItemExist.productId ? newItem : item;
        });
      } else {
        state.productList = [...state.productList, newItem];
      }
    },
    updateCart: (state, action) => {
      const { productId, quantity, price } = action.payload;
      state.productList = state.productList.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity,
            price,
          };
        } else {
          return item;
        }
      });
    },
    removeFromCart: (state, action) => {
      state.productList = state.productList.filter((item) => {
        return item.productId !== action.payload;
      });
    },
  },
});
export const { addToCart, removeFromCart, updateCart } = cartReducer.actions;
export default cartReducer.reducer;
