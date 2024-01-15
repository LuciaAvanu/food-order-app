import { createContext, useState } from "react";

//create the context
export const CartContext = createContext({
  items: [],
  itemsQty: 0,
  totalPrice: 0,

  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//create provider
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    itemsQty: 0,
    totalPrice: 0,
  });

  function handleAddItemToCart(meal) {
    // get items in cart
    const existingItems = shoppingCart.items;

    //search for this meal in the existing items
    const indexOfMeal = existingItems.findIndex((item) => item.id === meal.id);

    //item hasn't been added before:
    if (indexOfMeal === -1) {
      // add the whole meal
      meal.qty = 1;
      existingItems.push(meal);
    } else {
      //just increase the quantity of this item in the cart
      existingItems[indexOfMeal].qty++;
    }

    //update itemsQty
    const newItemsQty = shoppingCart.itemsQty + 1;

    // update total price
    let price = shoppingCart.totalPrice;
    price += Number(meal.price);

    setShoppingCart((prevShoppingCart) => ({
      ...prevShoppingCart,
      items: existingItems,
      itemsQty: newItemsQty,
      totalPrice: price,
    }));
  }

  function handleUpdateItemQty(action, id) {
    if (id) {
      const itemIdx = shoppingCart.items.findIndex((item) => item.id === id);
      const meal = shoppingCart.items[itemIdx];
      let newItemsQty = shoppingCart.itemsQty;
      let newTotalPrice = shoppingCart.totalPrice;


      if (action === "increment") {
        //update item qty
        shoppingCart.items[itemIdx].qty++;
        //update cart qty
        newItemsQty ++;
        //update price
        newTotalPrice += Number(meal.price);
      } else {
        //update item qty
        shoppingCart.items[itemIdx].qty--;
        //update cart qty
        newItemsQty --;
        //update price
        newTotalPrice -= Number(meal.price)
      }

      const newItems = shoppingCart.items;

      setShoppingCart((prevShoppingCart) => ({
        ...prevShoppingCart,
        items: newItems,
        itemsQty: newItemsQty,
        totalPrice: newTotalPrice,
      }));
    }
  }

  function updateQtyAndTotalPrice() {

  }

  const ctxValue = {
    items: shoppingCart.items,
    itemsQty: shoppingCart.itemsQty,
    totalPrice: shoppingCart.totalPrice,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQty,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
