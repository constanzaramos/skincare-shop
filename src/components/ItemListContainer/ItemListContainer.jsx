import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mock/CatalogMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
console.log("Productos cargados:", data);

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoriaId) {
          setData(res.filter(prod => prod.category === categoriaId));
        } else {
          setData(res);
        }
      })
      .catch(err => console.error(err));
  }, [categoriaId]);

  return (
    <div className="item-list-container">
      <h2>{greeting || (categoriaId ? `Categoría: ${categoriaId}` : "Catálogo")}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
