import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("dataLocal")
      ? JSON.parse(localStorage.getItem("dataLocal"))
      : []
  );

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
    if (localStorage.getItem("dataLocal")) {
      const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
      dataLocal.push(expense);
      localStorage.setItem("dataLocal", JSON.stringify(dataLocal));
    } else {
      localStorage.setItem("dataLocal", JSON.stringify([expense]));
    }
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
