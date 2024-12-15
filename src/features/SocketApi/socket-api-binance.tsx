import React, { useEffect, useState } from 'react';

interface Socket {
    tokenName?: string;
}

const SocketApiBinance: React.FC<Socket> = ({tokenName}) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [price, setPrice] = useState<string | null>(null);

    useEffect(() => {
        if (!tokenName) {
            return; 
        }
        const newSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${tokenName.toLowerCase()}usdt@trade`);

        newSocket.onopen = () => {
            console.log('Соединение установлено');
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const price = parseFloat(data.p) > 1 ? parseFloat(data.p).toFixed(2) : parseFloat(data.p).toFixed(4);
            setPrice(price);
        };

        newSocket.onclose = (event) => {
            console.log('Соединение закрыто:', event);
        };

        newSocket.onerror = (error) => {
            console.error('Ошибка:', error);
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    return (
        <div>
            {price ? <p>{price} USDT</p> : <p>Загрузка...</p>}
        </div>
    );
};

export default SocketApiBinance;