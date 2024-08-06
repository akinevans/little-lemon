import React from "react";
import "./Review.css";

export default function Review(props) {
  return (
    <article className='review-wrapper'>
      <div className='top'>
        <img
          className='profile-img'
          src={props.profileImg}
          alt={`user ${props.name}`}
        />
        <h1>{props.name}</h1>
      </div>
      <section className='star-container'>
        <img className='star' src={props.star1} alt='star rating' />
        <img className='star' src={props.star2} alt='star rating' />
        <img className='star' src={props.star3} alt='star rating' />
        <img className='star' src={props.star4} alt='star rating' />
        <img
          className='star'
          src={props.star5 ? props.star5 : null}
          alt={props.star5 ? "star rating" : null}
        />
      </section>
      <p className='review-text'>{props.reviewText}</p>
    </article>
  );
}
