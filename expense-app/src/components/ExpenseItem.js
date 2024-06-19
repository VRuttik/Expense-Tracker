import React from 'react';
import './ExpenseItem.css'; // Import your CSS file here

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 12th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
