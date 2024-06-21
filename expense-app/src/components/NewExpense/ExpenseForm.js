import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(''); 
    const [enteredAmount, setEnteredAomunt] = useState('');
    const [enteredDate, setEnteredDate] = useState('');  

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAomunt(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };   

    // button pe submit karne se data i.e title, amount and date will store in expenseData
    const submitHandler = (event) => { 
        
        event.preventDefault();     // form load nahi hoga preventDefault se.

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        setEnteredTitle('');  // after saving data filed textfield will clean.
        setEnteredAomunt('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/> {/* the titleChangeHandler function will execute and title will change.*/}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0" steps="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;