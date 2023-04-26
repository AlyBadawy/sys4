import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountLayout } from '../../types/AccountLayout';

interface LayoutState {
  account: AccountLayout;
}

const initialState: LayoutState = {
  account: AccountLayout.Password,
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setAccountLayout: (state, action: PayloadAction<AccountLayout>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccountLayout } = LayoutSlice.actions;
export const layoutReducer = LayoutSlice.reducer;
