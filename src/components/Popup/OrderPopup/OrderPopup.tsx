import { Portal } from "solid-js/web";
import { Button, Size } from "../../../shared/Button/Button";
import { Counter } from "../../../shared/Counter/Counter";
import { Price } from "../../../shared/Price/Price";

import { store, setPopup } from '../../../store/Store';

import styles from './styles.module.css';

const Popup = () => {
  return (<Portal mount={document.body}>
  <div className={styles.wrapper}>
    <div className={styles.top}>
      <div className={styles.title}>Ваш заказ</div>
      <Button template='white' onClick={setPopup}>
        <Button.Icon src="/cross.svg" />
      </Button>
    </div>

    <div className={styles.list}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/recipe/pizza1.jpg" />
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>Чикен Сладкий чили</div>
          <div className={styles.point}>Традиционное тесто, 23см</div>
          <div className={styles.order}>
            <Counter />
            <div className={styles.price}>499</div>
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
  </div>
</Portal>)}

export default Popup;