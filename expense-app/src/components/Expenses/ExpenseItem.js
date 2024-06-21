import React, { useState} from 'react'; {/* use State is used for the event handling like user scrolling, form fill karana*/}

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return (
        <Card className="expense-item"> {/* Card is component*/}
            <ExpenseDate date={props.date} />   {/* ExpenseDate is child component*/}
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;
