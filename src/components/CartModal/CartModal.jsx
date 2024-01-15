import { createPortal } from "react-dom";
import Cart from "./Cart";
import { useState } from "react";
import Checkout from "./Checkout/Checkout";
import Submitted from "./Sumbitted";

export default function CartModal({ setModalIsOpen }) {
  const [display, setDisplay] = useState(0);

  function handleBackgroundClick() {
    setModalIsOpen(false);
  }
  return createPortal(
    <div className="w-full min-h-screen fixed top-0 left-0 flex justify-center items-center">
      <div
        onClick={handleBackgroundClick}
        className="w-full h-full fixed top-0 left-0 bg-black/70"
      ></div>

      <div className="bg-orange-100 rounded-lg p-10 relative z-10 w-1/2 flex flex-col">
        {display === 0 && (
          <Cart
            setModalIsOpen={setModalIsOpen}
            setDisplay={setDisplay}
          />
        )}
        {display === 1 && (
          <Checkout
            setModalIsOpen={setModalIsOpen}
            setDisplay={setDisplay}
          />
        )}
        {display === 2 && <Submitted setModalIsOpen={setModalIsOpen} />}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
