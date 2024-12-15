import { ExchangeArray } from "../../../entities/ExchangeArray";
import { CryptoExchange } from "../CryptoExchange";
import styles from './styles.module.scss';


export const CryptoExchanges = () => {
    const exchanges = Object.keys(ExchangeArray).filter(exchangeName => ExchangeArray[exchangeName].length > 0);

    return (
        <div className={styles.cryptoExchanges}>
            {exchanges.map((exchangeName, index) => {

                return (
                    <div key={index} className={styles.exchangeContainer}>
                        <CryptoExchange exchangeName={exchangeName} />
                    </div>
                );
            })}
        </div>
    );
};