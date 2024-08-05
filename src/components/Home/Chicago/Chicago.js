import React from "react";
import "./Chicago.css";
import chefs1 from "../../../assets/Mario and Adrian A.jpg";
import chefs2 from "../../../assets/Mario and Adrian b.jpg";

export default function Chicago() {
  return (
    <div className='chicago-wrapper'>
      <div className='left'>
        <h1 className='title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <article className='article-text'>
          Welcome to Little Lemon, your gateway to the vibrant and diverse
          flavors of the Mediterranean, right here in the heart of Chicago. Our
          passion is to bring you an authentic culinary experience that captures
          the essence of the sun-drenched coasts and rich culinary traditions of
          the Mediterranean region. Our menu is a celebration of fresh,
          high-quality ingredients, artfully prepared to bring out the best in
          every dish. From our creamy hummus and freshly baked pita to our
          succulent kebabs and delectable baklava, each bite is a journey
          through the Mediterranean.
        </article>
      </div>
      <div className='right'>
        <img
          className='chefs chef-top'
          src={chefs1}
          alt='two chefs working in the kitchen'
        />
        <img
          className='chefs'
          src={chefs2}
          alt='two chefs laughing in the kitchen'
        />
      </div>
    </div>
  );
}
