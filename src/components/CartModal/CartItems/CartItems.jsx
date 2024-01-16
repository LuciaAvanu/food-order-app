import { useContext } from "react";
import CartItem from "./CartItem/CartItem";
import { CartContext } from "../../../cart-context";

export default function CartItems() {
  const cartCtx = useContext(CartContext);

  return (
    <div className="flex flex-col">
      {cartCtx.itemsQty === 0 && <p>No products added to cart yet.</p>}
      {cartCtx.items.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}
