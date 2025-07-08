import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ compra }) => {
  const { removeItem, addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(compra.quantity);
  const [error, setError] = useState("");

  const handleRemove = () => {
    removeItem(compra.id);
  };

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > compra.stock) {
      setError(`Máximo disponible: ${compra.stock}`);

      return;
    }
    setError("");
    const diff = newQuantity - compra.quantity;
    addItem(compra, diff);
    setQuantity(newQuantity);
  };

  return (
    <tr>
      <td>
        <img src={compra.img} alt={compra.name} width="50" />
      </td>
      <td>{compra.name}</td>
      <td>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => handleUpdateQuantity(parseInt(e.target.value))}
        />
        {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}
      </td>
      <td>${compra.price.toLocaleString("es-CL")}</td>
      <td>${(compra.price * quantity).toLocaleString("es-CL")}</td>
      <td>
        <button onClick={handleRemove}>Eliminar </button>
      </td>
    </tr>
  );
};

export default CartItem;
