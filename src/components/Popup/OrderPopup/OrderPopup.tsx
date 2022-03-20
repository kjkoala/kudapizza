import { lazy } from "solid-js";
import { Button, Size } from "../../../shared/Button/Button";
import { Counter } from "../../../shared/Counter/Counter";
import { Price } from "../../../shared/Price/Price";

import { store } from '../../../store/Store';

import styles from '../styles.module.css';

const Popup = () => {
  return (<>
    <div className={styles.list}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/recipe/pizza1.jpg" />
        </div>
        <div className={styles.detail}>
          <div className={styles.description}>
          <div className={styles.name}>Чикен Сладкий чили</div>
          <div className={styles.point}>Традиционное тесто, 23см</div>
          </div>
          <div className={styles.order}>
            <Counter />
            <Price>499</Price>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <Price size='M'>
        Итог {store.price}
      </Price>
      <div>
        <Button template='orange'>
          <Button.Text size={Size.MEDIUM}>Оформить заказ</Button.Text>
        </Button>
        </div>
    </div>
  </>)}

export default Popup;