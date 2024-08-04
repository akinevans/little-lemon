import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu(props) {
  return (
    <div className={`menu-nav ${props.visible ? "" : "hide-menu"}`}>
      <ul className='menu-ul'>
        <li className='menu-list-item'>
          <Link className='menu-link' to='/'>
            Home
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='About'>
            About
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='Menu'>
            Menu
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='Reservations'>
            Reservations
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='Order Online'>
            Order Online
          </Link>
        </li>
        <li className='menu-list-item'>
          <Link className='menu-link' to='Login'>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
