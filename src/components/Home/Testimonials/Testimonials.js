import React from "react";
import Review from "../Review/Review";
import "./Testimonials.css";
import p1 from "../../../assets/profile-1.png";
import p2 from "../../../assets/profile-2.png";
import p3 from "../../../assets/profile-3.png";
import p4 from "../../../assets/profile-4.png";
import star from "../../../assets/star.png";

export default function Testimonials() {
  return (
    <div className='testimonials-wrapper'>
      <div className='top-wrapper'>
        <h1>What People are saying about our restaurant!</h1>
      </div>

      <div className='bottom-wrapper'>
        {/* //^ Review Components here */}
        {/* classes for images in testimonials.css */}
        <Review
          profileImg={p1}
          name='Sasha Jones'
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={star}
          reviewText='This Mediterranean restaurant offers an exquisite blend of traditional and modern flavors, creating a culinary experience that is both authentic and innovative.'
        />
        <Review
          profileImg={p2}
          name='Zach Smith'
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          reviewText='The hummus is creamy and rich, paired with warm, pita bread. Each dish is a vibrant celebration of fresh ingredients.'
        />
        <Review
          profileImg={p4}
          name='Sara Lopez'
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={star}
          reviewText='This gem of a restaurant offers a warm and inviting ambiance, complemented by an impressive menu of Mediterranean classics. The moussaka is a standout!'
        />
        <Review
          profileImg={p3}
          name='Terry Mills'
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          reviewText='The fresh, zesty salads and hearty, flavorful mains, such as the chicken shawarma, are delicious. The baklava, with its delicate layers of filo pastry is lovely.'
        />
      </div>
    </div>
  );
}
