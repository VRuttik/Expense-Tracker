import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'> {/* Card is main component */}
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            key={expense.id}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />
                    )
                )
            }
        </Card>
    );
}

export default Expenses;
