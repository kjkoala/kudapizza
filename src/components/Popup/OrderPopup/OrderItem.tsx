import { Component } from "solid-js";
import { Counter } from "../../../shared/Counter/Counter";
import { Price } from "../../../shared/Price/Price";
import styles from "../styles.module.css";

export const OrderItem: Component = ({ src, title, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={src} />
      </div>
      <div className={styles.detail}>
        <div className={styles.description}>
          <div className={styles.name}>{title}</div>
          <div className={styles.point}>Традиционное тесто, 23см</div>
        </div>
        <div className={styles.order}>
          <Counter />
          <Price>{price}</Price>
        </div>
      </div>
    </div>
  );
};
