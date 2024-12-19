import styles from './styles.module.scss'
export const FillForm = () => {
    return (
        <div className={styles.fillForm}>
            <div>БИРЖА</div>
            <input />
            <div>ТОКЕН</div>
            <input />
            <div>ЦЕНА ПОКУПКИ</div>
            <input />
            <div>КОЛИЧЕСТВО</div>
            <input />
        </div>
    )
}