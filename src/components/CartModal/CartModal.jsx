import { createPortal } from "react-dom";
import Cart from "./Cart";

export default function CartModal({setModalIsOpen}) {
  function handleBackgroundClick() {
    setModalIsOpen(false)
  }

  return createPortal(
    <div className="w-full min-h-screen fixed top-0 left-0 flex justify-center items-center">
      <div
        onClick={handleBackgroundClick}
        className="w-full h-full fixed top-0 left-0 bg-black/70"
      ></div>
      <Cart setModalIsOpen={setModalIsOpen}/>
    </div>,
    document.getElementById("modal")
  );
}
