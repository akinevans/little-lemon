import React from "react";
import Button from "../../Button/Button";
import plate_of_food from "../../../assets/restauranfood.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className='hero-wrapper'>
      {/* //^ left side */}
      <div className='hero-left'>
        <div className='text-wrapper'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <Button
          title='Reserve a Table'
          className=''
          onClick={() => {
            console.log("reserve a table");
          }}
        />
      </div>

      {/* //^ right side */}
      <div className='hero-right'>
        <img src={plate_of_food} alt='plate of food' className='hero-img' />
      </div>
    </div>
  );
}
