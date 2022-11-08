import { createSlice } from "@reduxjs/toolkit";
import { fetchDepositBalanceDetails } from "../actions/balancesActions";

interface IBalances {
  depositBalance: number;
}

const initialState: IBalances = {
  depositBalance: 0,
};

const balancesSlice = createSlice({
  name: "balances",
  initialState,
  reducers: {
    resetBalances: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDepositBalanceDetails.fulfilled, (state, action) => {
      state.depositBalance = action.payload;
    });
  },
});

export default balancesSlice.reducer;

export const { resetBalances } = balancesSlice.actions;
