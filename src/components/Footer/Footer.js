import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import lemon_white from "../../assets/lemon-white-logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className='footer'>
      {/* //^ logo */}

      <img
        className='little-lemon-logo'
        src={lemon_white}
        alt='little lemon logo'
      />

      {/* //^ sitemap */}
      <div className='sitemap'>
        <h1>SiteMap</h1>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/reservations'>Reservations</Link>
          </li>
          <li>
            <Link to='/order-online'>Order Online</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>

      {/* //^ contact */}
      <div className='contact'>
        <h1>Contact Us</h1>

        <p>123 Main street Chicago, IL 60007</p>
        <p>555-719-3326</p>
        <Link className='email' to='mailto:contact@littlelemon.com'>
          contact@littlelemon.com
        </Link>
      </div>
      {/* //^ social media */}
      <div className='social-media'>
        <h1>Social Media</h1>
        <div className='social-media-images'>
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={twitter} alt='twitter' />
        </div>
      </div>
    </footer>
  );
}
