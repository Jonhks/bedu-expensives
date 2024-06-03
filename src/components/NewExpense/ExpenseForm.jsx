import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // estados

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
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input
            type="text"
            value={data.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            value={data.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-12-31"
            value={data.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
