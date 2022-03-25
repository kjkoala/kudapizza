import type { Component } from "solid-js";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";

import { NavCategories } from "./components/NavCategories/NavCategories";
import { CheckAddress } from "./components/CheckAdress/CheckAddress";
import { Resource } from "./api/Resource/Resource";
import { Popup } from "./components/Popup/Popup";
import { MajorPopup } from "./components/MajorPopup/MajorPopup";

import PopupOrder from "./components/Popup/OrderPopup/OrderPopup";
import { BigPopup } from "./shared/BigPopup/BigPopup";

const App: Component = () => {
  return (
    <>
      <BigPopup namePopup="ProductPopup">
        {(props) => <MajorPopup {...props} />}
      </BigPopup>
      <Header />
      <div className={styles.wrapper}>
        <NavCategories />
        <CheckAddress />
        <Resource title="Пицца" href="pizza" />
        <Resource title="Суши" href="sushi" />
        <Resource title="Закуски" href="snacks" />
        <Resource title="Десерты" href="dessert" />
        <Resource title="Напитки" href="drinks" />
        <Resource title="Соусы" href="sauce" />
        <Resource title="Комбо" href="combo" />
      </div>
      <Popup title="Ваш заказ" namePopup="popupOrder">
        <PopupOrder />
      </Popup>
    </>
  );
};

export default App;
