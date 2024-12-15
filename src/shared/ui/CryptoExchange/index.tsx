import { TokenInfo } from "../TokenInfo";
import { ExchangeArray } from '../../../entities/ExchangeArray/index';
import { exchangeImage } from '../../../entities/ExchangeImage';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Scroll } from "../scroll";
import { useSelector } from 'react-redux';

export const CryptoExchange = ({ exchangeName }: { exchangeName: string }) => {
    const tokens = ExchangeArray[exchangeName];
    const sums = useSelector((state: any) => state.sum.sums);
    
    
    const sum = sums[exchangeName] ? sums[exchangeName].reduce((acc: number, val: number) => acc + val, 0) : 0;
    const freeUSDT = (tokens.find(token => token.tokenName === 'USDT')?.quantity || 0)
    //console.log('@@@@@@@',freeUSDT);
    

    if (!tokens) {
        return <div>Exchange not found</div>;
    }

    const LogoComponent = exchangeImage[exchangeName];
    const exchangeStyle = styles[exchangeName];

    return (
        <div className={clsx(styles.cryptoExchange, exchangeStyle)}>
            <div className={styles.exchangeHeaderContainer}>
                {LogoComponent && <LogoComponent />}
                <div className={styles.exchangeHeader}>{exchangeName}</div>
                <div>
                    <div>${sum}</div>
                    <div>USDT: {freeUSDT}</div>
                </div>
            </div>
            <Scroll height={"200px"} items={[]} width={"350px"}>
                {tokens.map((token, index) => (
                    <div key={index}>
                        <TokenInfo
                            tokenName={token.tokenName}
                            priceNow={token.priceNow}
                            pricePurchase={token.pricePurchase}
                            quantity={token.quantity}
                            exchangeName={exchangeName}
                        />
                    </div>
                ))}
            </Scroll>
        </div>
    );
};