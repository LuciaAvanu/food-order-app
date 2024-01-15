import { useContext } from "react";
import { CartContext } from "../../../../cart-context";

export default function CartItem({ cartItem }) {
  const cartCtx = useContext(CartContext);

  return (
    <div className="item flex mb-2 justify-between">
      <p>
        {cartItem.name} - {cartItem.qty} x ${cartItem.price}
      </p>

      <div className="flex justify-center justify-items-center items-center">
        <button
          className="w-6 h-6 rounded-full bg-black text-orange-200"
          onClick={() => cartCtx.updateItemQuantity("decrement", cartItem.id)}
        >
          -
        </button>
        <p className="mx-2 flex justify-self-center">{cartItem.qty}</p>
        <button
          className=" w-6 h-6 rounded-full bg-black  text-orange-200"
          onClick={() => cartCtx.updateItemQuantity("increment", cartItem.id)}
        >
          +
        </button>
      </div>
    </div>
  );
}
