import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  cartItems: [],

};

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    // ADD TO CART
    addToCart: (state, action) => {

      const existingItem = state.cartItems.find(

        (item) => item.id === action.payload.id

      );

      // IF PRODUCT ALREADY EXISTS
      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });

      }

    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(

        (item) => item.id !== action.payload

      );

    },

    // INCREASE QUANTITY
    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(

        (item) => item.id === action.payload

      );

      if (item) {

        item.quantity += 1;

      }

    },

    // DECREASE QUANTITY
    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(

        (item) => item.id === action.payload

      );

      if (item && item.quantity > 1) {

        item.quantity -= 1;

      }

    },

    // CLEAR CART
    clearCart: (state) => {

      state.cartItems = [];

    },

  },

});

export const {

  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,

} = cartSlice.actions;

export default cartSlice.reducer;