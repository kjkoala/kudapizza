import { Component,  createSignal, Setter, Show } from 'solid-js';
import { Account, Item } from './Ingridients';
import cn from 'classnames';
import styles from './Food.module.css';
import { Price } from '../../shared/Price/Price';

interface Props {
  item: Item;
  account: Account;
  tag: string;
  changeIngridients: Setter<Item[]>;
}

export const Food: Component<Props> = ({ changeIngridients, account, tag, item }) => {
  const { name, price, src } = item;
  const [status, setStatus] = createSignal(account === 'remove');

  const accountentHandler = (prevSignal: Item[]): Item[] => {
    const findItem = prevSignal.find((item) => item.name === name)
    if(findItem) {
      setStatus(false)
      return prevSignal.filter((item) => findItem.name !== item.name)
    }
    setStatus(true);
    return [...prevSignal, item];
  }

  return (<label 
  className={cn(styles.label, 
    (account === 'remove' && !status() && styles.remove), 
    (account === 'add' && status() && styles.done),
    )} 
  for={`${tag}${name}`} onChange={[changeIngridients, accountentHandler]}>
  <div className={styles.food}>
      <input id={`${tag}${name}`} name={`${tag}${name}`} type='checkbox' className={styles.checkbox} value={`${tag}${name}`} />
      <img src={src} />
  </div>
  <span>{name}</span>
  <Show when={account === 'add'}>
    <div className={styles.price}>
      <Price size='S'>
        {price}
      </Price>
    </div>
  </Show>
</label>)
}