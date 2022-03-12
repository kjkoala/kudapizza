import cn from 'classnames';
import { Component } from 'solid-js'
import styles from './styles.module.css'

interface Props {
  size?: 'M';
}

export const Price: Component<Props> = ({ children, size }) => {
  return <div className={cn(styles.total, size == 'M' && styles.medium)}>{children}</div>
}