import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("dataLocal")
      ? JSON.parse(localStorage.getItem("dataLocal"))
      : []
  );

  // Obtener
  useEffect(() => {
    const expensesRef = collection(db, "expenses");
    getDocs(expensesRef).then((resp) =>
      console.log(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  }, []);

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
    <>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
