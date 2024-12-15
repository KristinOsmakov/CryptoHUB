import { BinanceLogo, BitgetLogo, BybitLogo, HTXLogo, KucoinLogo, OKXLogo } from '../../assets/svg';

export type ExchangeImage = {
    [key: string]: React.ComponentType;
};
export const exchangeImage: ExchangeImage = {
    'Binance': BinanceLogo,
    'Bybit': BybitLogo,
    'Kucoin': KucoinLogo,
    'HTX': HTXLogo,
    'OKX': OKXLogo,
    'Bitget': BitgetLogo,
};