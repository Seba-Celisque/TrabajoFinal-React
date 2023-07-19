import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (newProduct) => {
    let exist = isInCart(newProduct.id);

    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const removeItemByID = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find((product) => product.id === id);
    return producto?.quantity;
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalItems;
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeItemByID,
    getTotalQuantityById,
    getTotalItems,
    getTotalAmount,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
