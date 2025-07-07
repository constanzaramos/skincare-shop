import { useState, useEffect } from "react";
import "./itemCount.scss";

const ItemCount = ({ initial = 1, stock, onAdd, setSelectedQuantity }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setSelectedQuantity(count);
  }, [count, setSelectedQuantity]);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
