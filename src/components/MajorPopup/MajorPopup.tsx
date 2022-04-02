import { createEffect, createMemo, createSignal, Show } from "solid-js";
import { Ingridients } from "./Ingridients";
import { Radio } from "../../shared/Radio/Readio";
import { Price } from "../../shared/Price/Price";
import { Button, Size } from "../../shared/Button/Button";

import styles from "./MajorPopup.module.css";
import { addToCart, setPopup } from "../../store/Store";
import { ItemData } from "../../api/ItemData";

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
  const [data] = ItemData()

  createEffect(() => {
    console.log(data())
  })
return
  const [cost, setCost] = createSignal({});

  // @TODO: Подумать над тем как лучше тут сделать
  onClose.kek = () => {
    history.back();
  };

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
      addToCartProduct(data(), {
        ...cost(),
        price: finalPrice(),
      })
    );
    setPopup("ProductPopup");
    onClose.kek();
  };
  return (
    <>
      <Show when={data.loading}>
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
                items={data.ingridients.major}
              />
              <Radio
                items={data.dough}
                name="dough"
                onChange={setCost}
              />
              <Radio
                items={data.sizes}
                name="size"
                onChange={setCost}
              />
              <Ingridients
                title="Добавить в пиццу:"
                account="add"
                tag="bottom"
                onChange={setCost}
                items={data.ingridients.optional}
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
