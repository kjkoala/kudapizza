import { Component } from "solid-js/types/render";
import { Portal, Show } from "solid-js/web";
import { stopPropagation } from "../../helpers/stopPropagation";
import { store, setPopup } from "../../store/Store";

import styles from "./styles.module.css";


export const BigPopup: Component<{ namePopup: string, children: Component<{onClose: { kek: Function }}> }> = ({ namePopup, children: Component }) => {
  // @TODO: Подумать как лучше прокидывать пропс в компонент
  const sks = {
    kek: () => {}
  }
  return (
    <Show when={store.popups.has(namePopup)}>
      <Portal mount={document.body}>
        <div className={styles.wrapper} onClick={() => {
          setPopup(namePopup)
          sks.kek()
        }}>
          <div className={styles.body} onClick={[stopPropagation, this]}>
            <Component onClose={sks} />
          </div>
        </div>
      </Portal>
    </Show>
  );
};
