import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, price, img } = product;

  return (
    <div className="item-card">
      <img src={img} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">Precio: ${price.toFixed(3)}</p>
      </div>
      <Link to={`/producto/${id}`}>
        <button className="btn-ver-mas">Ver más</button>
      </Link>
    </div>
  );
};
export default Item;
