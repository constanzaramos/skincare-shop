import "./itemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { name, description, img, price, stock } = product;
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAdd = (quantity) => {
    console.log(`Añadido al carrito: ${quantity} unidades de ${name}`);
    addItem(product, quantity);
    setAddedToCart(true);
  };
console.log(product);

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
        {addedToCart ? (
          <div className="added-buttons">
            <button className="btn-carrito" onClick={() => navigate("/cart")}> Ir al carrito</button>
            <button className="btn-seguir-comprando" onClick={() => navigate("/")}>Seguir comprando</button>
          </div>
        ) : (
          <>
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={handleAdd}
              setSelectedQuantity={setSelectedQuantity}
            />
            <button
              className="btn-add-to-cart"
              onClick={() => handleAdd(selectedQuantity)}
            >
              Añadir al carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
