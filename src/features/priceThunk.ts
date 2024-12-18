// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { addPrice } from "./priceSlice";

// export const fetchPrice = createAsyncThunk(
//     'price/fetchPrice',
//     async (tokenName: string, { dispatch }) => {
//         if (!tokenName) {
//           return;
//         }
    
//         const newSocket = new WebSocket(`wss://stream.bybit.com/v5/public/spot`);

//                 newSocket.onopen = () => {
//                     console.log('Соединение установлено');
        
//                     const subscribeMessage = {
//                         op: 'subscribe',
//                         args: [`publicTrade.${tokenName.toUpperCase()}USDT`], 
//                     };
//                     newSocket.send(JSON.stringify(subscribeMessage));
//                 };
        
//                 newSocket.onmessage = (event) => {
//                     const data = JSON.parse(event.data);
        
//                     if (data.topic === `publicTrade.${tokenName.toUpperCase()}USDT`) {
//                         const tradeData = data.data[0]; 
//                         const price = parseFloat(tradeData.p); 
//                         const formatPrice = price > 1 ? price.toFixed(2) : price.toFixed(4)
//                         dispatch(addPrice({ tokenName, price: formatPrice }))
//                     }
//                 };
//                 newSocket.onclose = (event) => {
//                     console.log('Соединение закрыто:', event);
//                 };
        
//                 newSocket.onerror = (error) => {
//                     console.error('Ошибка:', error);
//                 };
//                 return newSocket
//             }
// )