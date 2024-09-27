// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import businessListReducer from './slices/businessSlice';
import userReducer from './slices/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    businessList: businessListReducer,
  },
});

// Types for the store's dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
