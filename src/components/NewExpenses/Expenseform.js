import React from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle]=React.useState('');
  const [enteredAmount,setEnteredAmount]=React.useState('');
  const [enteredDate,setEnteredDate]=React.useState('');
  const titleChangeEventHandler = (event)=>{
    setEnteredTitle(event.target.value);
  }
  const amountChangeEventHandler = (event)=>{
    setEnteredAmount(event.target.value);
  }
  const dateChangeEventHandler = (event)=>{
    setEnteredDate(event.target.value);
  }
  const formSubmissionHandleer =(event)=>{
    event.preventDefault();
    const expensedata ={
        title : enteredTitle,
        amount : +enteredAmount,
        date :new Date(enteredDate)
    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSavingExpense(expensedata);
  }
  const handleCancelButton =()=>{
    props.changeState(false);
  }
  return (
    <form onSubmit={formSubmissionHandleer}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeEventHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="Number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeEventHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeEventHandler}></input>
        </div>
        
      </div>
      <div className="new-expense__buttons">
      <div className="new-expense__actions">
            <button onClick={handleCancelButton}>Cancel</button>
        </div>
      <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </div>
    </form>
  );
};
export default ExpenseForm;
