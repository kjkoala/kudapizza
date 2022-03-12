import { Ingridients } from './Ingridients';
import { Radio } from '../../shared/Radio/Readio';
import styles from './styles.module.css';
import { Price } from '../../shared/Price/Price';
import { Button, Size } from '../../shared/Button/Button';

export const MajorPopup = () => {
  return <div className={styles.wrapper}>
    <div className={styles.body}>
      <div className={styles.image}>
        <img src='/recipe/pizza1.jpg' />
      </div>
      <div className={styles.console}>
        <div className={styles.title}>Пепперони по-деревенски</div>
          <Ingridients
            items={[
              {name: 'Моцарелла', src:'/mozarella.svg'},
              {name: 'Огурцы маринованные', src:'/mozarella.svg'},
              {name: 'Пепперони', src:'/mozarella.svg'},
              {name: 'Томатный соус', src:'/mozarella.svg'},
            ]}
          />
        <Radio items={[
            {value: 'Традиционное'},
            {value: 'Тонкое'},
          ]} name='dough'/>
          <Radio items={[
            {value: '20 см'},
            {value: '28 см'},
            {value: '33 см'},
          ]} name='size'/>
          <Ingridients
            title='Добавьте в пиццу'
            items={[
              {name: 'Моцарелла', src:'/mozarella.svg'},
              {name: 'Огурцы маринованные', src:'/mozarella.svg'},
              {name: 'Пепперони', src:'/mozarella.svg'},
              {name: 'Томатный соус', src:'/mozarella.svg'},
            ]}
          />
        <div className={styles.bottom}>
              <Price>
                Итого: 379
              </Price>
              <Button template='orange'>
                <Button.Text size={Size.MEDIUM}>Добавить</Button.Text>
              </Button>
        </div>
      </div>
    </div>
  </div>
}