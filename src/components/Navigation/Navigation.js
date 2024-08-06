import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import "./Navigation.css";
import "../../AppVariables.css";
import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/🦆 icon _hamburger menu.svg";
import exit from "../../assets/exit.png";

export default function Navigation() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const shouldNavBeVisible = () => {
    return showNavMenu && windowSize[0] <= 930 ? "show" : "";
  };

  //Window width for showing / hiding hamburger menu
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const displayMenuIcon = () => {
    return showNavMenu ? exit : hamburger;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <nav className='nav'>
        <img className='nav-logo' src={logo} alt='a drawn lemon' />
        <ul className='ul'>
          <li className='list-item'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='list-item'>
            <Link className='link' to='About'>
              About
            </Link>
          </li>
          <li className='list-item'>
            <Link className='link' to='Menu'>
              Menu
            </Link>
          </li>
          <li className='list-item'>
            <Link className='link' to='Reservations'>
              Reservations
            </Link>
          </li>
          <li className='list-item'>
            <Link className='link' to='Order Online'>
              Order Online
            </Link>
          </li>
          <li className='list-item'>
            <Link className='link' to='Login'>
              Login
            </Link>
          </li>
        </ul>
        <img
          src={displayMenuIcon()}
          alt='menu icon'
          className={`hamburger-img ${windowSize[0] <= 930 ? "" : "hide"}`}
          onClick={() => {
            setShowNavMenu(!showNavMenu);
          }}
        />
      </nav>
      {/* //& Nav Menu Modal Here */}
      <NavMenu
        // return 'show' or ''
        visible={shouldNavBeVisible()}
      />
    </>
  );
}
