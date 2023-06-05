import React, { useContext } from "react";
import "./Cart.css";
import { Products } from "../Products";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { CartItems, totalprice,  } = useContext(ShopContext);
  const totalamount = totalprice();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="header"> Your Cart Items </h1>
      {Products.map((prod) => {
        if (CartItems[prod.id] !== 0) {
          return <CartItem data={prod} />;
        }
      })}

      {totalamount > 0 ? (
        <div className="checkout">
          <p className="total">totle amount ${totalamount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button> Checkout </button>
        </div>
      ) : (
        <p className="empty">your Cart is empty</p>
      )}
    </>
  );
};

export default Cart;
