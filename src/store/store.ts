import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../features/cryptoSlice';
import sumReducer from '../features/sumSlice';
import priceReducer from '../features/priceSlice';

export const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
    sum: sumReducer,
    price: priceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;