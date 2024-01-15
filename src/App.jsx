import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/CartModal/CartModal";
import CartContextProvider from "./cart-context";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <CartContextProvider>
      {modalIsOpen && <CartModal setModalIsOpen={setModalIsOpen} />}
      <Header setModalIsOpen={setModalIsOpen} />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
