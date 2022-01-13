import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => (
  <Card className="expenses">
    {expenses.map((item) => (
      <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
    ))}
  </Card>
);

export default Expenses;
