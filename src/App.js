import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      {expenses.length <= 0 ? (
        <div>No hay nada</div>
      ) : (
        <Expenses items={expenses} />
      )}
    </div>
  );
}

export default App;
