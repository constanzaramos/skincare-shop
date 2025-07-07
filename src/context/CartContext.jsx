import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some(product => product.id === id);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((product) => {
        if (item.id === product.id) {
          return { ...product, quantity: product.quantity + quantity };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
    const removeItem = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
    };
    const clearCart = () => {
        setCart([]);
    }

    const totalCart = () => {
        return cart.reduce((acc, product) => acc += product.price * product.quantity, 0);
    }

    const totalQuantity = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}; 
