import React from "react";
import { useNavigate } from "react-router-dom";

import "./Reservations.css";

export default function Reservations() {
  const navigate = useNavigate();

  const navigateToConfirmPage = () => {
    navigate("/confirmation-page");
  };
  return (
    <form className='form-wrapper'>
      <label>
        Date
        <input className='form-input' type='date' name='date' />
      </label>
      <label>
        Time
        <input
          className='form-input'
          type='time'
          name='time'
          min='12:00'
          max='21:00'
        />
      </label>
      <label>
        Number of Guests
        <input className='form-input' type='number' min='1' max='12' />
      </label>
      <label>
        Occasion
        <select className='form-input' name='occasion'>
          <option value='Anniversary'>Anniversary</option>
          <option value='Retirement'>Retirement</option>
          <option value='Birthday'>Birthday</option>
          <option value='Graduation'>Graduation</option>
          <option value='NA'>N/A</option>
        </select>
      </label>
      <input
        className='submit-btn'
        type='submit'
        value='Submit'
        onClick={(e) => {
          e.preventDefault();
          navigateToConfirmPage();
        }}
      />
    </form>
  );
}
