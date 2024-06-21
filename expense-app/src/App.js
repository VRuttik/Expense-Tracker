import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66754d6fad19ca34f87c60ee/latest', {
          headers: {
            'X-Master-Key': '$2a$10$R8Bnxpjj80f8ikXutRQjUOgV9YHIWt5h7ZTKEnTAVtMMcVSKYd.L2'
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setExpenses(data.record);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExpenses();
  }, []); // [] ek hi bar API fetch hogi usake bad nahi.

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

