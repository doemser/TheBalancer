import React from "react";
import Input from "../atoms/input";
import useStore from "../../useStore";

const BookingEdit = ({ title, amount, date, index }) => {
  const editValueTitle = useStore((state) => state.editValueTitle);
  const editValueAmount = useStore((state) => state.editValueAmount);
  const editValueDate = useStore((state) => state.editValueDate);

  return (
    <>
      Title:
      <Input
        type="text"
        value={title}
        onChange={(event_) => {
          editValueTitle(event_.target.value, index);
        }}
      />
      Date:
      <Input
        type="date"
        value={date}
        onChange={(event_) => {
          editValueDate(event_.target.value, index);
        }}
      />
      Amount:
      <Input
        type="number"
        value={amount}
        onChange={(event_) => {
          editValueAmount(event_.target.value, index);
        }}
      />
    </>
  );
};

export default BookingEdit;
