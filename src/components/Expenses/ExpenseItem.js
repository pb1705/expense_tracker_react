import "./ExpenseItem.css";
import "./ExpenseDate";
import React from "react";
import Expensedate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {
  

  return (
    <li>
    <Card className="expense-item">
      <Expensedate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
