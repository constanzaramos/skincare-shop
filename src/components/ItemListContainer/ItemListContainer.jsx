import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs,query,where } from "firebase/firestore";
import { dataBase } from "../../service/firebase";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  const navigate = useNavigate();

 const validCategories = ["Cabello", "Rostro", "Cuerpo", "Ofertas"];

  useEffect(() => { 
    if (categoriaId && !validCategories.includes(categoriaId)) {
      navigate("/error");
      return;
    }

    setLoading(true);
    const productsCollection = categoriaId
      ? query(collection(dataBase, "catalog"), where('category', '==', categoriaId))
      : collection(dataBase, "catalog");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId, navigate]);

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
