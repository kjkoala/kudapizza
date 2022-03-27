import { Button, Size } from "../../shared/Button/Button";

import { store, setPopup } from "../../store/Store";

import cn from 'classnames';

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <Button template="white">
              <Button.Icon src="/location.svg" />
              <Button.Text size={Size.SMALL}>Москва</Button.Text>
              <Button.Icon src="/arrow_down.svg" />
            </Button>
            <Button template="white">Проверить адрес</Button>
            <div>
              Средне время доставки*: <b>00:24:19</b>
            </div>
          </div>
          <div className={styles.block}>
            <div>Время работы с 11:00 до 23:00</div>
            <Button template="white">
              <Button.Icon src="/account.svg" />
              <Button.Text>Войти в аккаунт</Button.Text>
            </Button>
          </div>
        </div>
      </div>
      <div className={cn(styles.body, styles.sticky)}>
        <div className={styles.wrapper}>
          <a className={styles.logotype} href="/">
            <img src="/logotype.svg" />
          </a>
          <Button template="orange" onClick={() => setPopup("popupOrder")}>
            <Button.Icon src="/shopping_bag.svg" />
            <Button.Text size={Size.MEDIUM}>
              {store.price.toLocaleString()} ₽
            </Button.Text>
          </Button>
        </div>
      </div>
    </>
  );
};
