import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item will have an id, title, image, and quantity
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrease quantity if more than 1
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item
      }
    },
    clearItem:(state,action)=>{
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
