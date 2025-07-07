import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../service/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productCollection = collection(dataBase, "catalog");
    const docRef = doc(productCollection, id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (invalid) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail-container">
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
