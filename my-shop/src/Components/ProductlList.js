import React, { useContext, useState } from "react";
import { Products } from "../Products";
import styles from "./productList.module.css";
import { ShopContext } from "../context/ShopContext";

const ProductlList = () => {
  const { addtocart, CartItems } = useContext(ShopContext);

  return (
    <div className={styles.box}>
      {Products.map((pro) => (
        <div key={pro.id} className={styles.product}>
          <div>
            <img className={styles.img} src={pro.ProductImage} />
          </div>
          <div className={styles.discription}>
            <p>{pro.ProductName}</p>
            <p>${pro.Price}</p>
          </div>
          <button onClick={() => addtocart(pro.id)} className={styles.addbtn}>
            Add to Cart
            {CartItems[pro.id] > 0 && <span> ({CartItems[pro.id]})</span>}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductlList;
