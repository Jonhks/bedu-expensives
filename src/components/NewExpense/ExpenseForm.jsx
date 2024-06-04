import { useState } from "react";
import styled from "styled-components";

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => (props.invalid ? "#ad0000" : "#000")};
  }
  & input {
    font: inherit;
    padding: 0.5rem;
    border: 1px solid ${(props) => (props.invalid ? "#ad0000" : "#ccc")};
    width: 20rem;
    max-width: 100%;
  }
`;

const FormActions = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1rem;
  border: 1px solid #464646;
  background-color: #464646;
  color: #e5e5e5;
  border-radius: 12px;
  margin-right: 1rem;
  width: 100%;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: #afafaf;
    border-color: #afafaf;
    color: black;
  }
  @media (min-width: 768px) {
    width: auto;
  }
`;

const ExpenseForm = (props) => {
  // estados
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // handlers
  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (data.title.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const expense = {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };
    props.saveExpense(expense);
    setData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isValid}>
          <label>Descripción</label>
          <input
            type="text"
            value={data.title}
            onChange={titleChangeHandler}
          />
        </FormControl>
        <FormControl invalid={!isValid}>
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            value={data.amount}
            onChange={amountChangeHandler}
          />
        </FormControl>
        <FormControl invalid={!isValid}>
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-12-31"
            value={data.date}
            onChange={dateChangeHandler}
          />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type="submit">Agregar</Button>
      </FormActions>
    </form>
  );
};

export default ExpenseForm;
