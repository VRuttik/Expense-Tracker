import React from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {

    return (
        <Card className='expenses'> {/* Card is main component */}

            {
                props.item.map(
                    expense => {
                        <ExpenseItem
                            date={props.date}
                            title={props.title}
                            amount={props.amount} />
                    }
                )
            }

            {/* ek-ek hi item aa raha hai to braket likhane ki jarurat nahi. (props.data or title, amount)*/}
        </Card>
    );
}

export default Expenses;