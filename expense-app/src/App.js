import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  let expenses = [
    {
      id: 'e1',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },

    {
      id: 'e2',
      title: 'Books Fee',
      amount: 230,
      date: new Date(2021, 2, 22)
    },

    {
      id: 'e3',
      title: 'House Rent',
      amount: 700,
      date: new Date(2021, 4, 2)
    },

    {
      id: 'e4',
      title: 'Food',
      amount: 540,
      date: new Date(2021, 5, 5)
    },
  ];

  const addExpenseHandler = (expese) => {
    console.log(expese);
  } 

  return (
    <div>

      <NewExpense onAddExpense={ addExpenseHandler }/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;