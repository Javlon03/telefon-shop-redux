import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Product.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
