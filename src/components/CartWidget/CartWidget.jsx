import "../CartWidget/cartWidget.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <div>
      <button className="cart-widget">
        <FaCartShopping className="cart-icon" />
        <span className="cart-count">{totalQuantity()}</span>
      </button>
    </div>
  );
};

export default CartWidget;
