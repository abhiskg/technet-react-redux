import { IProduct } from '@/types/globalTypes';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  products: IProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
