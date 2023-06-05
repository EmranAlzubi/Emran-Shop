import React, { useState } from "react";
import { createContext } from "react";
import { Products } from "../Products";

export const ShopContext = createContext();

// const cart = {  // the issue with this intial state its static
// so if new product add to the products array so i need to update this state manually
//   1: 0,
//   2: 0,
//   3: 0,
//   4: 0,
//   5: 0,
//   6: 0,
//   7: 0,
//   8: 0,
// };
const cartdefault = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(cartdefault());
  console.log(CartItems);
  const addtocart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };
  const RemoveFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const updateiteminput = (newvalue, itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: newvalue }));
  };
  const totalprice = () => {
    let totalamount = 0;

    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let iteminfo = Products.find((product) => product.id === Number(item));
        totalamount += CartItems[item] * iteminfo.Price;
      }
    }
    return totalamount;
  };

  const value = {
    CartItems,
    addtocart,
    RemoveFromCart,
    updateiteminput,
    totalprice,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
