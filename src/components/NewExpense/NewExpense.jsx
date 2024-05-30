import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(newExpense);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm saveExpense={saveExpense} />
    </Card>
  );
};

export default NewExpense;
