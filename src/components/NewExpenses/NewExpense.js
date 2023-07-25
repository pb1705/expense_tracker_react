import React from "react";
import ExpenseForm from "./Expenseform";
import './NewExpense.css';

const NewExpense =(props)=>{
    const [clicked,setClickedState] =React.useState(false)
    const expenseSaveHandler =(expenseFormData)=>{
        const expenseData ={...expenseFormData,id:Math.random().toString()};
        props.onAddExpense(expenseData);

    }
    const clickHandler =()=>{
        setClickedState(true);
    }
    return (
        <div className="new-expense">
            {clicked==false && <button onClick={clickHandler}>Add New Expense</button>}
            {clicked && <ExpenseForm changeState ={setClickedState}onSavingExpense={expenseSaveHandler} />}
            
        </div>
    );
}
export default NewExpense;