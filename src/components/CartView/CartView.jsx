import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartView = () => {
  const { cart, removeItem, clearCart, totalCart } = useContext(CartContext);
  return (
    <>
      <div>
        <h2>Tu carrito de compras</h2>
        {cart.map((compra) => (
         <div key={compra.id} compra={compra} removeItem={removeItem} />
        ))}
      </div>
      <div>
        <span>Total a pagar:${totalCart()}</span>
        <button onClick={clearCart}>Vaciar carrito</button>
        <button>Finalizar compra</button>
      </div>
    </>
  );
};

export default CartView;
