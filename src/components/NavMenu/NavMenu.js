import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu(props) {
  return (
    <div className={`menu-nav ${props.visible === "show" ? "" : "hide-menu"}`}>
      <ul className='menu-ul'>
        <li className='menu-list-item'>
          <Link className='menu-link' to='/'>
            Home
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='about'>
            About
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='menu'>
            Menu
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='reservations'>
            Reservations
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='order-online'>
            Order Online
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='login'>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
