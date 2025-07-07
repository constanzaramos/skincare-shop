import "./itemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { name, description, img, price, stock } = product;
  const handleAdd = (quantity) => {
    console.log(`Añadido al carrito: ${quantity} unidades de ${name}`);
  };

  return (
    <div className="item-detail">
      <div className="item-detail__image">
        <img src={img} alt={name} />
      </div>
      <div className="item-detail__info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">Precio: ${price.toLocaleString("es-CL")}</p>
        <p className="stock">Stock disponible: {stock}</p>
        <ItemCount stock={stock} onAdd={handleAdd} />

        <button className="btn-add-to-cart">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
