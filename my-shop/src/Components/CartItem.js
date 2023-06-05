import React, { useContext, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../context/ShopContext";

const CartItem = ({ data }) => {
  const { ProductImage, Price, ProductName, id } = data;

  const { CartItems, addtocart, RemoveFromCart, updateiteminput } =
    useContext(ShopContext);
  const handelcountupdate = (e) => {
    updateiteminput(Number(e.target.value), id);
  };
  return (
    <div className="item-card">
      <div className="item-content">
        <div>
          <img className="img" src={ProductImage} />
        </div>
        <div>
          <h3>{ProductName}</h3>
          <h4>${Price}</h4>
          <div className="item-control">
            <button onClick={() => RemoveFromCart(id)}>-</button>
            <input value={CartItems[id]} onChange={handelcountupdate} />
            <button onClick={() => addtocart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
