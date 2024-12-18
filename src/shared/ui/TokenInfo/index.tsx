import styles from './styles.module.scss'
import { TokenInfoProps } from '../../../entities/ExchangeArray/index'
import { useDispatch, useSelector } from 'react-redux'
import { addSum } from '../../../features/sumSlice'
import { useEffect, useState } from 'react'
import SocketApiBybit from '../../../features/SocketApi/socket-api-bybit'
import { PublicPageModal } from '../publicPageModal/PublicPageModal'



export const TokenInfo = ({ tokenName, priceNow, pricePurchase, quantity, exchangeName}: TokenInfoProps & {exchangeName: string}) => {
    const price = useSelector((state: any) => state.price.prices[tokenName]); 
    const priceNowNum = parseFloat(price ? price : priceNow)
    const pricePurchaseNum = parseFloat(pricePurchase)
    const quantityVerify = parseFloat(quantity) > 1 ? parseFloat(quantity).toFixed(2) : parseFloat(quantity).toFixed(4)
    const quantityNum = (parseFloat(quantityVerify)) 
    const profit = (priceNowNum - pricePurchaseNum)
    const sumUSD  = (quantityNum * priceNowNum)    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addSum({ exchange: exchangeName, value: sumUSD }));
    }, [dispatch, sumUSD, exchangeName]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <button onClick={openModal} className={styles.tokenInfo}>
            <div>{tokenName}</div>
            <div><SocketApiBybit tokenName={tokenName}/></div>
            {/* <div>{price}</div> */}
            <div>{quantityNum}</div>
            <div>{sumUSD}</div>
        </button>
        <PublicPageModal 
        pricePurchaseNum={pricePurchaseNum}
        sumUSD={sumUSD} 
        tokenName={tokenName} 
        quantityNum={quantityNum} 
        isOpen={isModalOpen} 
        onClose={closeModal} />
        </>
    )
}