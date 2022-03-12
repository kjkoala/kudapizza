import { Component, Suspense, lazy, Show } from "solid-js";
import { store } from "../../store/Store";

const PopupOrder = lazy(async () => import('./OrderPopup/OrderPopup'))

export const Popup: Component= () => {
  return (
    <Show when={store.popups.getPopupIsShow}>
      <Suspense>
        <PopupOrder />
      </Suspense>
    </Show>
  )
}