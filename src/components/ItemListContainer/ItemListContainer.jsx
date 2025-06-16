import { useEffect, useState } from "react";
import { getProducts } from "../../mock/CatalogMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [data,setData] = useState([]);
  useEffect(() => {
    getProducts()
    .then((response) => setData(response))
    .catch((error) => console.error("Error fetching products:", error));
  }
  , []);
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
