import styles from './styles.module.css';


export const Counter = () => {

  return (
  <div className={styles.wrapper}>
    <button className={styles.button}>-</button>
    <input className={styles.input} maxLength={3} min={1} value={1} />
    <button className={styles.button}>+</button>
  </div>)
}