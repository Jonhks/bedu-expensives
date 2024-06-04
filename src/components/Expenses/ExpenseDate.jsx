import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("es-MX", { month: "long" });
  const day = new Date(props.date).toLocaleString("es-MX", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className={styles.expenseDate}>
      <div className={styles["expense-date-month"]}>{month}</div>
      <div className={styles["expense-date-year"]}>{year}</div>
      <div className={styles["expense-date-day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
