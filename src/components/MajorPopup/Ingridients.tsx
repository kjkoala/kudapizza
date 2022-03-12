import { Component, For } from 'solid-js'
import { Food } from './Food';

import styles from './styles.module.css';

interface Item {
  src: string;
  name: string;
}

export const Ingridients: Component<{items: Item[], title?: string}>= ({ items, title }) => {
  return (
    <div className={styles.composition}>
      {title && <div className={styles.subtitle}>{title}</div>}
      <For each={items}>
        {(item) => <Food {...item} />}
      </For>
    </div>)
}