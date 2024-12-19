import styles from './styles.module.scss'
import { TokenInfoProps } from '../../../entities/ExchangeArray/index'
import { useDispatch, useSelector } from 'react-redux'
import { addSum } from '../../../features/sumSlice'
import { useEffect, useState } from 'react'
import SocketApiBybit from '../../../features/SocketApi/socket-api-bybit'
import { PublicPageModal } from '../publicPageModal/PublicPageModal'
import ArrowDownDouble from '../../../assets/svg/ArrowDownDouble'
import ArrowUpDouble from '../../../assets/svg/ArrowUpDouble'



export const TokenInfo = ({ tokenName, priceNow, priceBuy, quantity, exchangeName}: TokenInfoProps & {exchangeName: string}) => {
    const price = useSelector((state: any) => state.price.prices[tokenName]); 
    // const priceNowNum = Math.round(parseFloat(price ? price : priceNow)).toFixed(2)
    const priceNowNum = parseFloat((price ? price : priceNow))
    const priceBuyNum = parseFloat(priceBuy)
    const quantityVerify = parseFloat(quantity) > 1 ? parseFloat(quantity).toFixed(2) : parseFloat(quantity).toFixed(4)
    const quantityNum = (parseFloat(quantityVerify)) 
    const profit = parseFloat((priceNowNum - priceBuyNum).toFixed(2))
    const profitPercent = parseFloat(Math.round((profit / priceBuyNum) * 100).toFixed(2))
    const sumUSD = parseFloat((quantityNum * priceNowNum).toFixed(2));   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addSum({ exchange: exchangeName, value: sumUSD }));
    }, [dispatch, sumUSD, exchangeName]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
        <div onClick={openModal} className={styles.tokenInfo}>
            <div>{tokenName}</div>
            <div><SocketApiBybit tokenName={tokenName}/></div>
            <div>{quantityNum}</div>
            <div>{sumUSD}</div>
            {profitPercent > 0 ? <ArrowUpDouble /> : <ArrowDownDouble />}
        </div>
        <PublicPageModal 
        profit = {profit}
        profitPercent={profitPercent}
        priceBuyNum={priceBuyNum}
        sumUSD={sumUSD} 
        tokenName={tokenName} 
        quantityNum={quantityNum} 
        isOpen={isModalOpen} 
        onClose={closeModal} />
        </>
    )
}