import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const NewExpense = (props) => {
  const saveExpense = async (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(newExpense);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "expenses"), {
      title: "Tokyo",
      amount: "Japan",
      date: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm saveExpense={saveExpense} />
    </Card>
  );
};

export default NewExpense;
