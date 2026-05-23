import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  wishlistItems: [],

};

const wishlistSlice = createSlice({

  name: "wishlist",

  initialState,

  reducers: {

    // ADD TO WISHLIST
    addToWishlist: (state, action) => {

      const existingItem = state.wishlistItems.find(

        (item) => item.id === action.payload.id

      );

      // ONLY ADD IF NOT EXISTS
      if (!existingItem) {

        state.wishlistItems.push(action.payload);

      }

    },

    // REMOVE FROM WISHLIST
    removeFromWishlist: (state, action) => {

      state.wishlistItems = state.wishlistItems.filter(

        (item) => item.id !== action.payload

      );

    },

  },

});

export const {

  addToWishlist,
  removeFromWishlist,

} = wishlistSlice.actions;

export default wishlistSlice.reducer;