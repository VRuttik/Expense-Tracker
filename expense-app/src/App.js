import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/667564a1e41b4d34e406af70/latest', {
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

  useEffect(() => {
    fetchExpenses();
  }, []); // Empty dependency array means this effect runs once after initial render

  const addExpenseHandler = async (expense) => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/667564a1e41b4d34e406af70', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2a$10$R8Bnxpjj80f8ikXutRQjUOgV9YHIWt5h7ZTKEnTAVtMMcVSKYd.L2'
        },
        body: JSON.stringify([expense, ...expenses]), // Add the new expense to the existing list
      });
      if (!response.ok) {
        throw new Error('Failed to add expense');
      }
      fetchExpenses(); // Fetch the updated list of expenses
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
