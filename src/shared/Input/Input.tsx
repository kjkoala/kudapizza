import styles from "./styles.module.css";

export const Input = ({ icon, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};
