import ExpenseChart from "./ExpenseChart";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  let expensesList =props.expenses;
  const [year, setYear] = React.useState("2020");
  const handleFilter = (selectedvalue) => {
    console.log(selectedvalue);
    setYear(selectedvalue);
    
  };
  expensesList = props.expenses.filter((expense)=>{
    return expense.date.getFullYear()==year;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onSelectingFilter={handleFilter} />
      <ExpenseChart expenses ={expensesList}></ExpenseChart>
      <ExpenseList expenses={expensesList}></ExpenseList>
    </Card>
  );
};

export default Expenses;
