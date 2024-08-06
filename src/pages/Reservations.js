import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservations.css";

export default function Reservations() {
  //  State variables
  const [date, setDate] = useState(false);
  const [time, setTime] = useState(false);
  const [guests, setGuests] = useState(false);

  const validateForm = () => {
    if (date && time && guests) {
      return true;
    }
    return false;
  };

  const navigate = useNavigate();

  const navigateToConfirmPage = () => {
    navigate("/confirmation-page");
  };
  return (
    <form className='form-wrapper'>
      <label>
        Date
        <input
          className='form-input'
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Time
        <input
          className='form-input'
          type='time'
          name='time'
          min='12:00'
          max='21:00'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Number of Guests
        <input
          className='form-input'
          type='number'
          min='1'
          max='12'
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
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
          if (validateForm()) {
            navigateToConfirmPage();
          } else {
            //return error
            alert("Please fill out all fields to make a booking.");
          }
        }}
      />
    </form>
  );
}
