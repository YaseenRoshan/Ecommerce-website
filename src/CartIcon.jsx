import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./CartIcon.css";

const CartIcon = () => {
  const { totalCost, cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-icon" onClick={() => navigate("/cart")}>
      🛒 <span className="cart-count">{cart.length}</span>
      <div className="cart-total">Total: ${totalCost.toFixed(2)}</div>
    </div>
  );
};

export default CartIcon;
