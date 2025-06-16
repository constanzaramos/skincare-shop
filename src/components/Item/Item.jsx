import React from "react";

const Item = ({ product }) => {
   const { name, price, img } = product;

  return (
    <div className="item-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="price">Precio: ${price.toFixed(3)}</p>
      <button className="btn-ver-mas">Ver más</button>
    </div>
  );
};
export default Item;