import styles from './styles.module.scss';
export const Modal = () => {
    return (
        <div className={styles.Modal}>
        <div>НАЗВАНИЕ ТОКЕНА</div>
        <div>ЦЕНА СЕЙЧАС</div>
        <div>ЦЕНА ПОКУПКИ</div>
        <div>РАЗНИЦА (ЦС - ЦП)</div>
        <div>СУММА В USD</div>
    </div>
    )
}