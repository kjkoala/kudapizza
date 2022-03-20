import { Component, Show, } from "solid-js";
import { Portal } from "solid-js/web";
import { Button } from "../../shared/Button/Button";
import { setPopup, store } from "../../store/Store";

import styles from './styles.module.css';

export const Popup: Component = ({ children, title, closePopup = setPopup }) => {
  return (<Show when={store.popups.getPopupIsShow}>
            <Portal mount={document.body}>
              <div className={styles.overflow} onClick={closePopup}>
                <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.top}>
                    <div className={styles.title}>{title}</div>
                    <Button template='white' onClick={closePopup}>
                      <Button.Icon src="/cross.svg" />
                    </Button>
                  </div>
                    {children}
                </div>
              </div>
            </Portal>
          </Show>)}