import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./cartView.scss";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, clearCart, totalCart } = useContext(CartContext);

  return (
    <div className="cart-view">
      <h2>Tu carrito de compras</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((compra) => (
            <CartItem key={compra.id} compra={compra} />
          ))}
        </tbody>
      </table>

      <div className="total-section">
        <span>Total a pagar: ${totalCart().toLocaleString("es-CL")}</span>
        <div className="cart-actions">
          <button onClick={clearCart} className="btn-clear">
            Vaciar carrito
          </button>
          <Link className="btn-checkout" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
