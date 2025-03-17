"use client"
// import { Avatar } from "@nextui-org/avatar";
// import {Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownTrigger,
//     Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     Input, Image
//   } from "@nextui-org/react";
import { useState } from "react";
import Link from 'next/link'; 
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBarr() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span>Our Mosquito Mesh</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </Link>

          <ul className={click ?  "nav-menu" : "nav-menu active"}>
            <li className="nav-item">
              <Link
                href="/home"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                // activeClassName="active"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
}

export default NavBarr;