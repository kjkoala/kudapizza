import { Component, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { stopPropagation } from "../../helpers/stopPropagation";
import { Button } from "../../shared/Button/Button";
import { setPopup, store } from "../../store/Store";

import styles from "./styles.module.css";

interface Props {
  namePopup: string;
  title: string;
  closePopup?: (...args: any[]) => void;
}

export const Popup: Component<Props> = ({
  children,
  title,
  namePopup,
  closePopup = setPopup,
}) => {
  return (
    <Show when={store.popups.has(namePopup)}>
      <Portal mount={document.body}>
        <div className={styles.overflow} onClick={[closePopup, namePopup]}>
          <div className={styles.wrapper} onClick={[stopPropagation, this]}>
            <div className={styles.top}>
              <div className={styles.title}>{title}</div>
              <Button template="white" onClick={[closePopup, namePopup]}>
                <Button.Icon src="/cross.svg" />
              </Button>
            </div>
            {children}
          </div>
        </div>
      </Portal>
    </Show>
  );
};
