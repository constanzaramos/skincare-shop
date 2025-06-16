import Item from "../Item/Item";
import './itemList.scss';

const ItemList = ({ data }) => {
  return (
    <div className="item-list">
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
