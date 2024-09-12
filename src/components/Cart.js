import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              ${item.price} x {item.quantity}
            </p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
