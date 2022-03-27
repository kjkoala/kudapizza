import { createMemo } from "solid-js";
import { createStore, produce } from "solid-js/store";

const initialStore = {
  cart: [],
  get price() {
    return price();
  },
  productHref: null,
  popups: new Set<string>(),
};

export const [store, setStore] = createStore(initialStore);

const price = createMemo(() =>
  store.cart.reduce((prev, { price }) => prev + price, 0)
);

export const addToCart = (product) => {
  setStore(
    "cart",
    produce((cart) => cart.push(product))
  );
};

export const setPopup = (namePopup: string) => {
  const root = document.querySelector("#root")!;
  const { body } = document;
  setStore("popups", (popups) => {
    if (popups.has(namePopup)) {
      popups.delete(namePopup);
      root.classList.remove("openPopup");
      body.classList.remove("hidden");
    } else {
      popups.add(namePopup);
      root.classList.add("openPopup");
      body.classList.add("hidden");
    }
    return new Set(popups);
  });
};
