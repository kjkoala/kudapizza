import { Component } from "solid-js";
import { Button, Size } from "../../../shared/Button/Button";
import { Price } from "../../../shared/Price/Price";

import { addToCart, setPopup } from "../../../store/Store";

import styles from "./styles.module.css";

interface Props {
  recipe: string;
  title: string;
  price: number;
  src: string;
  id: number;
}

export const Item: Component<Props> = ({ title, recipe, src, price, id }) => {
  return (
    <div className={styles.wrapper} onClick={[setPopup, "ProductPopup"]}>
      <img src={src} />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{recipe}</div>
        <div className={styles.action}>
          <Button template="orange" onClick={() => addToCart(price)}>
            <Button.Text size={Size.MEDIUM}>Выбрать</Button.Text>
          </Button>
          <Price>от {price}</Price>
        </div>
      </div>
    </div>
  );
};
