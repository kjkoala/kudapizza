import { Button, Size } from "../../shared/Button/Button"
import { Input } from "../../shared/Input/Input"

import styles from './styles.module.css'

export const CheckAddress = () => {

  return (<div className={styles.wrapper}>
    <span className={styles.text}>Проверить адрес доставки</span>
    <Input placeholder='Адрес' icon='/location.svg' />
    <Button template="orange">
      <Button.Text size={Size.MEDIUM}>Проверить</Button.Text>
    </Button>
  </div>)
}