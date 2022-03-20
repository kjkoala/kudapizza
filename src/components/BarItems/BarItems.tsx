import { children } from 'solid-js'
import { Button } from '../../shared/Button/Button'
import styles from './styles.module.css'
export const BarItems = (props) => {
  const { title } = props;
  const itemChildren = children(() => props.children)
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>{title}</div>
        <Button template='white' border>
          <Button.Icon src='/filter.svg' />
          <Button.Text>Фильтр</Button.Text>
        </Button>
      </div>
      <div className={styles.wrapper}>{itemChildren()}</div>
    </div>
  )
}