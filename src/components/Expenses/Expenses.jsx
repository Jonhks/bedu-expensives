import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
