/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agrego un item al carrito.
  const addItems = (item, count) => {
    //Guardo mi producto en un objeto
    let cartItem = { item, count };

    //Creo un carrito axuliar
    let cartAux = [];
    //Consulto si el producto esta en el carrito
    if (isInCart(item)) {
      //Si esta en el carrito, lo busco y lo actualizo
      cartItem = cart.find((cartItem) => cartItem.item.id === item.id);
      cartItem.count += count;
      cartAux = [...cart];
    } else {
      //Si no esta en el carrito, lo agrego
      cartAux = [cartItem, ...cart];
    }
    //Actualizo el carrito
    setCart(cartAux);
  };

  //quitar el producto del carrito
  const removeItem = (item) => {
    const cartAux = cart.filter((cartItem) => cartItem.item.id !== item.id);
    setCart(cartAux);
  };

  //Consulto si el producto esta en el carrito
  const isInCart = (item) =>
    cart && cart.some((cartItem) => cartItem.item.id === item.id);

  return (
    <CartContext.Provider value={{ cart, addItems, removeItem, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
