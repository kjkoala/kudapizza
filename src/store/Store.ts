import { createStore } from 'solid-js/store'

const initialStore = {
  cart: [],
  price: 0,
  popups: {
    list: new Set(),
    get getPopupIsShow() {
      return this.list.has('popupOrder');
    },
  },
}

export const [store, setStore] = createStore(initialStore);

export const addToCart = (price: number) => {
 setStore('price', p => p + price);
}

export const setPopup = () => {
  setStore('popups', 'list', (l) => {
    if(l.has('popupOrder')) {
      l.delete('popupOrder');
      document.querySelector('#root')!.classList.remove('openPopup');
      document.body.classList.remove('hidden')
    } else {
      l.add('popupOrder');
      document.querySelector('#root')!.classList.add('openPopup')
      document.body.classList.add('hidden')
    }
    return new Set(l);
  })
}