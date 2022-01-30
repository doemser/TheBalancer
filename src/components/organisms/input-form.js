import React, { useState } from "react";
import useStore from "../../useStore";
import Button from "../atoms/button";
import Input from "../atoms/input";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addIncome = useStore((state) => state.addIncome);
  const addOutput = useStore((state) => state.addOutput);

  return (
    <>
      <label>
        Title
        <br />
        <Input
          type="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Amount
        <br />
        <Input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Date
        <br />
        <Input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <br />
      <Button
        type="income"
        color={"green"}
        disabled={!amount}
        onClick={() => {
          addIncome(title, amount, date);
          setDate("");
          setAmount("");
          setTitle("");
        }}
      >
        Income
      </Button>
      <Button
        type="output"
        disabled={!amount}
        onClick={() => {
          addOutput(title, amount, date);
          setDate("");
          setAmount("");
          setTitle("");
        }}
      >
        Output
      </Button>
    </>
  );
};

export default InputForm;
