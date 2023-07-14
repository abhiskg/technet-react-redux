/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  status: boolean;
  priceRange: number;
}

const initialState: ProductState = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange, toggleStatus } = productSlice.actions;

export default productSlice.reducer;
