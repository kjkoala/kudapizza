import { createMemo } from "solid-js";
import { createStore } from "solid-js/store";

const initialStore = {
  cart: [],
  get price() {
    return price();
  },
  popups: new Set<string>(),
};

export const [store, setStore] = createStore(initialStore);

const price = createMemo(() =>
  store.cart.reduce((prev, { price }) => prev + price, 0)
);

export const addToCart = (product) => {
  setStore("cart", (cart) => [...cart, product]);
};

export const setPopup = (namePopup: string) => {
  setStore("popups", (popups) => {
    if (popups.has(namePopup)) {
      popups.delete(namePopup);
      document.querySelector("#root")!.classList.remove("openPopup");
      document.body.classList.remove("hidden");
    } else {
      popups.add(namePopup);
      document.querySelector("#root")!.classList.add("openPopup");
      document.body.classList.add("hidden");
    }
    return new Set(popups);
  });
};
