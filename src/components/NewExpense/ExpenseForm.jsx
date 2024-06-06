import { useState, useRef } from "react";
import styled from "styled-components";
import styles from "./ExpenseForm.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

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

const ExpenseForm = (props) => {
  const titleRef = useRef(null);
  // estados
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [error, setError] = useState(null);
  // handlers

  const errorHandler = () => {
    setError(null);
  };

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
      setIsDateValid(true);
    }
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setData((prevState) => ({
        ...prevState,
        date: event.target.value,
      }));
      if (new Date(event.target.value) > new Date()) {
        setIsDateValid(false);
        setError({
          title: "Fecha inválida",
          message: `La fecha no debe ser mayor a ${new Date().toLocaleDateString()}`,
        });
      } else {
        setIsDateValid(true);
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsDateValid(true);

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
      titleRef.current.focus();
    }

    if (data.amount.trim().length === 0) {
      setIsAmountValid(false);
    }

    if (data.date.trim().length === 0) {
      setIsDateValid(false);
    }
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
              ref={titleRef}
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
          <Button
            type={"submit"}
            children={"Agregar"}
          />
        </FormActions>
      </form>
    </>
  );
};

export default ExpenseForm;
