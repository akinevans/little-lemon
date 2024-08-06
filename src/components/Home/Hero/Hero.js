import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Button/Button";
import plate_of_food from "../../../assets/restauranfood.jpg";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const navigateToReservation = () => {
    navigate("/reservations");
  };
  return (
    <section className='hero-wrapper'>
      {/* //^ left side */}
      <div className='hero-left'>
        <article className='text-wrapper'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </article>
        <Button
          title='Reserve a Table'
          className=''
          onClick={() => {
            navigateToReservation();
          }}
        />
      </div>

      {/* //^ right side */}
      <div className='hero-right'>
        <img src={plate_of_food} alt='plate of food' className='hero-img' />
      </div>
    </section>
  );
}
