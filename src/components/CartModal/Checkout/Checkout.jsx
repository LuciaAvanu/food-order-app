import { useContext } from "react";
import { CartContext } from "../../../cart-context";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Actions from "../Actions";

export default function Checkout({setModalIsOpen, setDisplay}) {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 tracking-wide">Checkout</h1>
      <p>Total amount: ${(cartCtx.totalPrice).toFixed(2)}</p>
      <CheckoutForm />
    </>
  );
}
