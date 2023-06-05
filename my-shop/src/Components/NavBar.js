import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
  return (
    <div className={classes.header}>

    <ul className={classes.list}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="cart"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
    <ShoppingCart size={32}/>
        </NavLink>
      </li>
    </ul>
          </div>
  );
};

export default NavBar;
