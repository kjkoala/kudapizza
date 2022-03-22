import { For } from "solid-js";
import { Button, Size } from "../../../shared/Button/Button";
import { Price } from "../../../shared/Price/Price";

import { store } from "../../../store/Store";

import styles from "../styles.module.css";
import { OrderItem } from "./OrderItem";

const Popup = () => {
  return (
    <>
      <div className={styles.list}>
        <For each={store.cart}>{(item) => <OrderItem {...item} />}</For>
      </div>
      <div className={styles.bottom}>
        <Price size="M">Итог {store.price}</Price>
        <div>
          <Button template="orange">
            <Button.Text size={Size.MEDIUM}>Оформить заказ</Button.Text>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Popup;
