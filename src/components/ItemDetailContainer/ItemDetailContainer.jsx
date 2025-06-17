import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mock/CatalogMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts()
      .then(res => {
        const found = res.find(prod => prod.id === id);
        setProduct(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
