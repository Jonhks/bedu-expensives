import { useState } from "react";
import styled from "styled-components";
import styles from "./ExpenseForm.module.css";

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
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
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  // handlers
  const titleChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setData((prevState) => ({
        ...prevState,
        title: event.target.value,
      }));
      setIsTitleValid(true);
    }
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setData((prevState) => ({
        ...prevState,
        amount: event.target.value,
      }));
      setIsAmountValid(true);
    }
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setData((prevState) => ({
        ...prevState,
        date: event.target.value,
      }));
      setIsDateValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    validateFields();
    if (!(isTitleValid && isAmountValid && isDateValid)) return;

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

  const validateFields = () => {
    if (data.title.trim().length === 0) {
      setIsTitleValid(false);
    }

    if (data.amount.trim().length === 0) {
      setIsAmountValid(false);
    }

    if (data.date.trim().length === 0) {
      setIsDateValid(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <div
          className={`${styles["new-expense-control"]} ${
            !isTitleValid && styles.invalid
          }`}
        >
          <label>Descripción</label>
          <input
            type="text"
            value={data.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div
          className={`${styles["new-expense-control"]} ${
            !isAmountValid && styles.invalid
          }`}
        >
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            value={data.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div
          className={`${styles["new-expense-control"]} ${
            !isDateValid && styles.invalid
          }`}
        >
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-12-31"
            value={data.date}
            onChange={dateChangeHandler}
          />
        </div>
      </FormControls>
      <FormActions>
        <Button type="submit">Agregar</Button>
      </FormActions>
    </form>
  );
};

export default ExpenseForm;
