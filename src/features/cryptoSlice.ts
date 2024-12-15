
import { createSlice } from '@reduxjs/toolkit';
import { fetchCryptoPrices } from './cryptoThunk';

interface Crypto {
  id: string;
  name: string;
  icon: string;
  purchasePrice: number;
  currentPrice: number;
  quantity: number;
  totalValue: number;
}

interface CryptoState {
  cryptos: Crypto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CryptoState = {
  cryptos: [],
  status: 'idle',
  error: null,
};

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    addCrypto: (state, action) => {
      state.cryptos.push(action.payload);      
    },
    removeCrypto: (state, action) => {
      state.cryptos = state.cryptos.filter(crypto => crypto.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoPrices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoPrices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cryptos = state.cryptos.map(crypto => {
          const ticker = action.payload.find((t: any) => t.symbol === crypto.id);
          return {
            ...crypto,
            currentPrice: parseFloat(ticker?.price) || crypto.currentPrice,
            totalValue: (parseFloat(ticker?.price) || crypto.currentPrice) * crypto.quantity,
          };
        });
      })
      .addCase(fetchCryptoPrices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const { addCrypto, removeCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;

