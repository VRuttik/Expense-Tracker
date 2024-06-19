import ExpenseItem from './components/ExpenseItem';

function App() {

  let expense = [
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

  return (
    <div>
      <h2>Let's get started</h2>

      <ExpenseItem 
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}>
        </ExpenseItem>

        <ExpenseItem 
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}>
        </ExpenseItem>

        <ExpenseItem 
        date={expense[2].date}
        title={expense[2].title}
        amount={expense[2].amount}>
        </ExpenseItem>

        <ExpenseItem 
        date={ expense[3].date }
        title={ expense[3].title }
        amount={expense[3].amount}>
        </ExpenseItem>
    </div>
  );
}

export default App;