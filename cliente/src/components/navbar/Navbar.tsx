import { Component } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="wrapper ">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
        </div>
        <div className="center">
            <Link to = "./ ">Music Pro</Link>
        </div>
        <div className="right">
        <div className="item">
            <Link to = "./ ">Home Page</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIcon">
           <ShoppingCartOutlinedIcon/>
           <span>0</span>
          </div>
        </div>
        </div>
        
        </div>
      </div>
    );
  }
}

export default Navbar;