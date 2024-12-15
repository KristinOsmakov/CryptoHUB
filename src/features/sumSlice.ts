import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface SumState {
    sums: { [key: string]: number[] }
}
const initialState: SumState = {
    sums: {
        Binance: [],
        Bybit: [],
        Kucoin: [],
        HTX: [],
        OKX: [],
        Bitget: [],
    },
}

const sumSlice = createSlice({
    name: 'sum',
    reducers: {
        addSum: (state, action: PayloadAction<{ exchange: string; value: number }>) => {
            const { exchange, value } = action.payload;
            if (!state.sums[exchange]) {
                state.sums[exchange] = [];
            }
            state.sums[exchange].push(value);
        },
    },
    initialState
})
export const { addSum } = sumSlice.actions;
export default sumSlice.reducer;