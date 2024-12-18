import React, { useState } from 'react'
import s from './publicPageModal.module.scss'
import ArrowLeft from '../../../assets/svg/ArrowLeft'
import ArrowRight from '../../../assets/svg/ArrowRight'
import { useSelector } from 'react-redux'
export type PublicPageModalProps = {
  tokenName: string
  sumUSD: number
  quantityNum: number
  pricePurchaseNum: number
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export const PublicPageModal = ({ tokenName, sumUSD, quantityNum, pricePurchaseNum, children,  isOpen = true, onClose }: PublicPageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prices = useSelector((state: any) => state.price.prices);
  if (!isOpen) {
    return null
  }
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose?.()
    }
  }

  const nextPost = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % exchanges.length)
  }

  const prevPost = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + exchanges.length) % exchanges.length)
  }
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule}>
        {/* <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button> */}
        <button className={s.prevButton} onClick={prevPost} type={'button'}>
          <ArrowLeft className={s.icon} />
        </button>
        <div className={s.header}>
          <div>{sumUSD}</div>
        </div>
        <div className={s.tokenInfo}>
          <div>{pricePurchaseNum}</div>
          <div className={s.tokenName}>{tokenName}</div>
          <div>{prices[tokenName]}</div>
        </div>
        <div>{quantityNum}</div>
        <div className={s.exchangeImg}>
            IMG EXCHANGE
          </div>
        <button className={s.nextButton} onClick={nextPost} type={'button'}>
          <ArrowRight className={s.icon} />
        </button>
      </div>
    </div>
  )
}


