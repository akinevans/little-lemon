import React from "react";
import { Link } from "react-router-dom";
import delivery from "../../../assets/deliverypng.png";
import "./FoodSpecial.css";

export default function FoodSpecial(props) {
  return (
    <section className='food-specials-wrapper'>
      <div className='top'>
        <img className={props.imgClass} src={props.img} alt={props.alt} />
      </div>
      <article className='bottom'>
        <div className='title-price'>
          <h1 className='title'>{props.itemName}</h1>
          <h1 className='price'>{props.price}</h1>
        </div>
        <div className='description-wrapper'>
          <p className='description-text'>{props.description}</p>
          <div className='order-section'>
            <Link className='link' to='/order-online'>
              Order a delivery
            </Link>
            <img src={delivery} alt='delivery truck' />
          </div>
        </div>
      </article>
    </section>
  );
}
