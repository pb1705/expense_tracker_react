import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpenseList.css';
const ExpenseList = (props)=>{
    if(props.expenses.length==0){
        return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
    }
    
    return <ul className="expenses-list">
    {props.expenses.map((expenses) => {
        return (

          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            key={expenses.id}
            date={expenses.date}
          ></ExpenseItem>
        );
      })}
      </ul>
}
export default ExpenseList;