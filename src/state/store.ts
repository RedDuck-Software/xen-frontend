import { configureStore, combineReducers } from "@reduxjs/toolkit";
import balancesReducer from "./reducers/balancesReducer";

const rootReducer = combineReducers({
  balances: balancesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
