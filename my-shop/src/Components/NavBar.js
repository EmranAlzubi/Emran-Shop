import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const { itemsSum } = useContext(ShopContext);
  return (
    <div className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <div className={classes.cartdiv}>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <ShoppingCart size={32} />
            </NavLink>
          </li>
          {itemsSum() > 0 && <span>{itemsSum()}</span>}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
