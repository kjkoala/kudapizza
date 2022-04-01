import { createMemo, createSignal, Show } from "solid-js";
import { Ingridients } from "./Ingridients";
import { Radio } from "../../shared/Radio/Readio";
import { Price } from "../../shared/Price/Price";
import { Button, Size } from "../../shared/Button/Button";

import styles from "./MajorPopup.module.css";
import { addToCart, setPopup } from "../../store/Store";
import { ItemData } from "../../api/ItemData";

const IngridientsItem = {
  labels: "ХИТ!",
  type: "pizza",
  price: 379,
  ingridients: {
    major: [
      { id: 1, name: "Моцарелла", src: "/mozarella.svg" },
      { id: 2, name: "Огурцы маринованные", src: "/pickle.svg" },
      { id: 3, name: "Пепперони", src: "/pepperony.svg" },
      { id: 4, name: "Томатный соус", src: "/tomat_sauce.svg" },
    ],
    optional: [
      { id: 1, name: "Моцарелла", src: "/mozarella.svg", price: 59 },
      { id: 2, name: "Шампиньоны", src: "/mashrooms.svg", price: 59 },
      { id: 3, name: "Красный лук", src: "/onion.svg", price: 59 },
      { id: 4, name: "Сладкий перец", src: "/pepper.svg", price: 59 },
    ],
  },
  dough: [
    { id: 1, value: "Традиционное" },
    { id: 2, value: "Тонкое" },
  ],
  sizes: [
    { id: 1, value: "20 см" },
    { id: 2, value: "28 см", multiplication: 1.2 },
    { id: 3, value: "33 см", multiplication: 1.6 },
  ],
};

const addToCartProduct = (
  { title, src, price, dough, sizes },
  userIngridients
) => {
  return {
    title,
    src,
    price,
    dough: dough[0],
    sizes: sizes[0],
    ...userIngridients,
  };
};

export const MajorPopup = ({ onClose }) => {
  const [cost, setCost] = createSignal({});

  // @TODO: Подумать над тем как лучше тут сделать
  onClose.kek = () => {
    history.back();
  };

  const data = ItemData({ pathname: location.pathname });

  const finalPrice = createMemo(() => {
    let price = data()?.price;
    if (price) {
      const kek = cost();
      for (let k in kek) {
        if (Array.isArray(kek[k])) {
          price = kek[k].reduce(
            (price, item) => (item?.price ?? 0) + price,
            price
          );
        }
      }
      return Math.ceil(price * (kek.size?.multiplication ?? 1));
    }
  });

  const addToCartHandler = () => {
    addToCart(
      addToCartProduct(IngridientsItem, {
        ...cost(),
        ...data(),
        price: finalPrice(),
      })
    );
    setPopup("ProductPopup");
    onClose.kek();
  };
  return (
    <>
      <Show when={!data()}>
        <img src="/loading.svg" className={styles.loading} />
      </Show>
      <Show when={data()}>
        {(data) => (
          <>
            <div className={styles.image}>
              <img src={data.src} />
            </div>
            <div className={styles.console}>
              <div className={styles.title}>{data.title}</div>
              <Ingridients
                account="remove"
                title="Убрать из пиццы:"
                tag="head"
                onChange={setCost}
                items={IngridientsItem.ingridients.major}
              />
              <Radio
                items={IngridientsItem.dough}
                name="dough"
                onChange={setCost}
              />
              <Radio
                items={IngridientsItem.sizes}
                name="size"
                onChange={setCost}
              />
              <Ingridients
                title="Добавить в пиццу:"
                account="add"
                tag="bottom"
                onChange={setCost}
                items={IngridientsItem.ingridients.optional}
              />
              <div className={styles.bottom}>
                <Price>Итого: {finalPrice()}</Price>
                <Button template="orange" onClick={addToCartHandler}>
                  <Button.Text size={Size.MEDIUM}>Добавить</Button.Text>
                </Button>
              </div>
            </div>
          </>
        )}
      </Show>
    </>
  );
};
