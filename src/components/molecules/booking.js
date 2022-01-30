import React from "react";

const Booking = ({ title, amount, date }) => {
  return (
    <>
      <span style={{ marginTop: "-15px" }}>Title: {title}</span>
      <span>Date: {date}</span>
      <span style={{ marginBottom: "-15px" }}>Amount: {amount}€</span>
    </>
  );
};

export default Booking;
