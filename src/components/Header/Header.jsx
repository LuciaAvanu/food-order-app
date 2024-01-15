import { useContext } from "react";
import Logo from "./Logo";
import { CartContext } from "../../cart-context";

export default function Header({setModalIsOpen}) {
  const cartCtx = useContext(CartContext);
  
  function handleCartClick(){
    setModalIsOpen(true)
  }

  return (
    <header className="flex justify-between mb-16">
      <Logo />
      <button className="text-2xl text-orange-300" onClick={handleCartClick}>{`Cart (${cartCtx.itemsQty})`}</button>
    </header>
  );
}
