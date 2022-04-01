import { Component } from "solid-js";
import { Button, Size } from "../../../shared/Button/Button";
import { Price } from "../../../shared/Price/Price";

import { setPopup } from "../../../store/Store";

import styles from "./styles.module.css";

interface Props {
  recipe: string;
  title: string;
  price: number;
  src: string;
  id: number;
  href: string;
}

const historyPopup = ({ href, id }: { href: string; id: number }) => {
  history.pushState(null, "", `/`);
  history.pushState({ product: href, id }, "", `${href}/${id}`);
  setPopup("ProductPopup");
};

export const Item: Component<Props> = ({
  title,
  recipe,
  src,
  price,
  id,
  href,
}) => {
  return (
    <div className={styles.wrapper} onClick={[historyPopup, { id, href }]}>
      <img src={src} />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{recipe}</div>
        <div className={styles.action}>
          <Button template="orange">
            <Button.Text size={Size.MEDIUM}>Выбрать</Button.Text>
          </Button>
          <Price>от {price}</Price>
        </div>
      </div>
    </div>
  );
};
