import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
<<<<<<< HEAD:cliente/src/components/navbar/Navbar.jsx
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
=======
import "./navbar.scss";
import Cart from '../Cart/Cart';
import Login from "./pages/Login/Login";


>>>>>>> 1e219d3512ff0062956c30dbfd814091ec237939:cliente/src/components/navbar/Navbar.tsx

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          
        </div>
        <div className="center">
          <Link className ="link" to="/">Music Pro</Link>
        </div>
        <div className="right">
       
          <div className="icons">
            <SearchIcon/>
            <Link className="link" to ="/login">
              <PersonOutlineOutlinedIcon/>
            </Link>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;