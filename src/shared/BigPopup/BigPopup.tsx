import { Component } from "solid-js/types/render";
import { Portal, Show } from "solid-js/web";
import { stopPropagation } from "../../helpers/stopPropagation";
import { store, setPopup } from "../../store/Store";

import styles from "./styles.module.css";

export const BigPopup: Component<{ namePopup: string }> = ({
  children,
  namePopup,
}) => {
  return (
    <Show when={store.popups.has(namePopup)}>
      <Portal mount={document.body}>
        <div className={styles.wrapper} onClick={[setPopup, namePopup]}>
          <div className={styles.body} onClick={[stopPropagation, this]}>
            {children}
          </div>
        </div>
      </Portal>
    </Show>
  );
};
