import { Component } from 'solid-js';
import styles from './styles.module.css';

interface Props {
  name: string;
  src: string;
}

export const Food: Component<Props> = ({ name, src }) => {
  return (<label className={styles.label} for='m1'>
  <div className={styles.food}>
      <img className={styles.cross} src='/cross_circle.svg' />
      <input id='m1' name='m1' type='checkbox' className={styles.checkbox} value={name} />
      <img src={src} />
  </div>
  <span>{name}</span>
</label>)
}