import { useContext } from "react";
import { CartContext } from "../../cart-context";
import CartItems from "./CartItems/CartItems";
import Actions from "./Actions";

export default function Cart({setModalIsOpen}) {
  const cartCtx = useContext(CartContext);

  return (
    <div className="bg-orange-100 rounded-lg p-10 relative z-10 w-1/2 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 tracking-wide">Your Cart</h1>
      <CartItems />
      <p className="mt-4 self-end text-xl font-bold">${(cartCtx.totalPrice).toFixed(2)}</p>
      <Actions setModalIsOpen={setModalIsOpen}/>
    </div>
  );
}
