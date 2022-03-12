import { lazy } from "solid-js";
import Popup from "./OrderPopup";


const OrderPopup = () => lazy(async () => ({
  default: Popup
}));

export default OrderPopup;