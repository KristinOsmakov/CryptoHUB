import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface PriceState {
    prices: { [key: string]: string }
}
const initialState: PriceState = {
    prices: {}
}

const priceSlice = createSlice({
    name: 'price',
    reducers: {
        addPrice: (state, action: PayloadAction<{ tokenName: string, price: string }>) => {
            const { tokenName, price } = action.payload;
            state.prices[tokenName] = price
            
        },
    },
    initialState
})
export const { addPrice } = priceSlice.actions;
export default priceSlice.reducer;