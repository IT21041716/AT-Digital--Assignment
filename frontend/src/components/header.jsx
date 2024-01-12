import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);

    // Disable or enable scrolling based on the menu state
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      <div className={`header-container${menuOpen ? " open" : ""}`}>
        <div className="header-inner">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </div>
        </div>
        <div className={`header-inner${menuOpen ? " open" : ""}`}>
          <div className="nav">
            <Link to="/service" className="navlink">
              SERVICE
            </Link>
            <Link to="/contactus" className="navlink">
              CONTACT US
            </Link>
            <Link to="/aboutus" className="navlink">
              ABOUT US
            </Link>
            <Link to="/carrers" className="navlink">
              CAREERS
            </Link>
          </div>
        </div>

        <div className="menuToggle" onClick={handleMenuToggle}>
          {menuOpen ? (
            <CloseIcon style={{ fontSize: "30px" }} />
          ) : (
            <MenuIcon style={{ fontSize: "30px" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
