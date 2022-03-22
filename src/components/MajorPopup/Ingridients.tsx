import { Component, createSignal, createEffect, For } from "solid-js";
import { Food } from "./Food";

import styles from "./Ingridients.module.css";

export interface Item {
  src: string;
  name: string;
  id: number;
  price: number;
  onChange: (items: Item[]) => void;
}

export type Account = "remove" | "add";

export const Ingridients: Component<{
  items: Item[];
  title?: string;
  account: Account;
  tag: string;
}> = ({ items, title, account, tag, onChange }) => {
  const initialSignal: Item[] = account === "add" ? [] : items;
  const [listIngridients, setListIngridients] = createSignal(initialSignal);
  createEffect(() => {
    if (onChange) {
      onChange((prevSignal) => {
        if (account === "remove") {
          return { ...prevSignal, major: listIngridients() };
        }
        return { ...prevSignal, optional: listIngridients() };
      });
    }
  });
  return (
    <div className={styles.composition}>
      {title && <div className={styles.subtitle}>{title}</div>}
      <For each={items}>
        {(item) => (
          <Food
            item={item}
            account={account}
            tag={tag}
            changeIngridients={setListIngridients}
          />
        )}
      </For>
    </div>
  );
};
