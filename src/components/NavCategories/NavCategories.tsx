import { ItemCategory } from "./ItemCategory";

import styles from "./styles.module.css";
export const NavCategories = () => {
  return (
    <ul className={styles.wrapper}>
      <ItemCategory title="Акции" src="/hot.svg" />
      <ItemCategory title="Пицца" src="/pizza.svg" />
      <ItemCategory title="Суши" src="/sushi.svg" />
      <ItemCategory title="Напитки" src="/drink.svg" />
      <ItemCategory title="Закуски" src="/snacks.svg" />
      <ItemCategory title="Комбо" src="/combo.svg" />
      <ItemCategory title="Десерты" src="/dessert.svg" />
      <ItemCategory title="Соусы" src="/sauce.svg" />
    </ul>
  );
};
