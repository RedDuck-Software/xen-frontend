import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalances } from "../../utils/getBalances";

export const fetchDepositBalanceDetails = createAsyncThunk<number, string>(
  "getDepositBalanceDetails",
  async (account) => {
    const { depositedBalance } = await getBalances(account);
    return depositedBalance;
  }
);
