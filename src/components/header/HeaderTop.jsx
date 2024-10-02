import logo from "../../assets/images/logo 1.png";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { Button, Menu, MenuItem } from "@mui/material";
import OpenMenu from "../AdditionalComp/OpenMenu";
import menuDatas from "../../../public/MenuDatas.json";
import products from "../../../public/Data.json";
import { useOperation } from "../../Context/ProductOperation";
import { useState } from "react";
function HeaderTop() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [toolAnchorEl, setToolAnchorEl] = useState(null);
  const [accAnchorEl, setAccAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const proOpen = Boolean(toolAnchorEl);
  const accOpen = Boolean(accAnchorEl);
  const { setSelectedCategory, setSearchTerm,setIsSelectProduct } = useOperation();
  const { isLoggedIn, logOut } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleToolClick = (event) => {
    setToolAnchorEl(event.currentTarget);
  };
  const handleToolClose = () => {
    setToolAnchorEl(null);
  };
  const handleAccClick = (event) => {
    setAccAnchorEl(event.currentTarget);
  };
  const handleAccClose = () => {
    setAccAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="head-left">
        <img
          className="cursor-pointer"
          onClick={() => navigate("/")}
          src={logo}
        />
      </div>
      <div className="head-center">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
            navigate("/search");
          }}
        />
        <SearchIcon className="head-icon" />
      </div>
      <div className="head-right">
        <ul>
          <Link to="/product">
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ color: "white" }}
            >
              PRODUCTS
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                {products.map((m, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      setSelectedCategory(m.category);
                      handleClose();
                    
                    }}
                    style={{ fontSize: "12px" }}
                  >
                    <p onClick={()=>setIsSelectProduct(true)}> {m.category}</p>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Link>
          <Link className="li" to="/contact">
            CONTACT
          </Link>

          {isLoggedIn ? (
            <ul>
              <Link>
                <OpenMenu
                  num="1"
                  handle={handleToolClick}
                  open={proOpen}
                  title="TOOLBOX"
                  anchor={toolAnchorEl}
                  handleClose={handleToolClose}
                  datas={menuDatas.slice(0, 5)}
                />
              </Link>
              <Link className="li">
                <OpenMenu
                  datas={menuDatas.slice(5, 12)}
                  num="1"
                  handle={handleAccClick}
                  handleClose={handleAccClose}
                  title="MY ACCOUNT"
                  anchor={accAnchorEl}
                  open={accOpen}
                />
              </Link>
              <Link className="li" onClick={logOut}>
                LOG OUT
              </Link>
            </ul>
          ) : (
            <ul>
              <Link className="li" to="/dealer">
                BECOME A DEALER
              </Link>
              <Link className="li" to="/login">
                LOG IN
              </Link>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
