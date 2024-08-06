import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import FoodSpecial from "./FoodSpecial";
import "./Specials.css";
import salad from "../../../assets/greek salad.jpg";
import bruschetta from "../../../assets/bruchetta.svg";
import lemon from "../../../assets/lemon dessert.jpg";

export default function Specials() {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/menu");
  };
  return (
    <section className='specials-wrapper'>
      <div className='top-wrapper'>
        <h1>Specials!</h1>
        <Button
          onClick={() => {
            navigateToMenu();
          }}
          title='Online Menu'
        />
      </div>

      <div className='bottom-wrapper'>
        {/* //^ Food Special Components here */}
        {/* classes for images in Specials.css */}
        <FoodSpecial
          imgClass='food-item-img salad'
          img={salad}
          alt='greek salad'
          itemName='Greek Salad'
          price='$12.99'
          description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        />

        <FoodSpecial
          imgClass='food-item-img bruschetta'
          img={bruschetta}
          alt='bruschetta'
          itemName='Bruschetta'
          price='$5.99'
          description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
        />

        <FoodSpecial
          imgClass='food-item-img lemon'
          img={lemon}
          alt='lemon dessert'
          itemName='Lemon Dessert'
          price='$5.00'
          description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        />
      </div>
    </section>
  );
}
