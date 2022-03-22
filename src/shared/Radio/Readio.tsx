import { Component, createSignal, createEffect, For } from "solid-js";
import styles from "./styles.module.css";

type Names = "dough" | "size";
interface Items {
  value: string;
  id: number;
  price: number;
}

export const Radio: Component<{ items: Items[]; name: Names }> = ({
  items,
  name,
  onChange,
}) => {
  const [readio, setReadio] = createSignal(items[0]);
  const onChangeHandler = (item) => {
    setReadio(item);
    if (onChange) {
      onChange((prev) => {
        if (name === "size") {
          return { ...prev, size: item };
        }
        return { ...prev, dough: item };
      });
    }
  };
  return (
    <div className={styles.doughtc}>
      <For each={items}>
        {(item) => (
          <input
            checked={readio().id === item.id}
            className={styles.dough}
            name={name}
            type="radio"
            value={item.value}
            onChange={[onChangeHandler, item]}
          />
        )}
      </For>
    </div>
  );
};
