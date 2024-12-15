import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoPrices = createAsyncThunk(
    'cryptos/fetchCryptoPrices',
    async (symbols: string[]) => {
        const response = await axios.get(`wss://ws.bitget.com/v2/ws/public`);
        return response.data.filter((ticker: any) => symbols.includes(ticker.symbol));
      }
)
