import { Component, For } from 'solid-js'
import styles from './styles.module.css'

interface Items {
  value: string;
}

export const Radio:Component<{ items: Items[], name: string }> = ({ items, name }) => {
  return (<div className={styles.doughtc}>
      <For each={items}>
        {(item) => <input className={styles.dough} checked name={name} type='radio' value={item.value} />}
      </For>
    </div>)
}