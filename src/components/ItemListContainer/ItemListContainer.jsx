import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs,query,where } from "firebase/firestore";
import { dataBase } from "../../service/firebase";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => { 
    setLoading(true);
    const productsCollection = categoriaId ? query(collection(dataBase,"catalog"), where('category','==',categoriaId)) : collection(dataBase,"catalog")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }, [categoriaId]);
  

  return (
    <div className="item-list-container">
    {loading ? (
      <Loading />
    ) : (
      <>
        <h2>{greeting || (categoriaId ? `Categoría: ${categoriaId}` : "Catálogo")}</h2>
        <ItemList data={data} />
      </>
    )}
  </div>
  );
};

export default ItemListContainer;
