import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Slices/TicketsSlice";

export const store = configureStore({
  reducer: { ticketsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
