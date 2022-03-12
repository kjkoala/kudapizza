import { Button } from '../../shared/Button/Button'
import styles from './styles.module.css'
export const BarItems = ({ children, title }) => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>{title}</div>
        <Button template='white' border>
          <Button.Icon src='/filter.svg' />
          <Button.Text>Фильтр</Button.Text>
        </Button>
      </div>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}