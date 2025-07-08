import "../CartWidget/cartWidget.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (totalQuantity() > 0) {
      navigate("/cart");
    } else {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); 
    }
  };
  return (
     <div className="cart-widget-container">
      <button className="cart-widget" onClick={handleClick}>
        <FaCartShopping className="cart-icon" />
        <span className="cart-count">{totalQuantity()}</span>
      </button>
      {showTooltip && <div className="cart-tooltip">Tu carrito está vacío</div>}
    </div>
  );
};

export default CartWidget;
