import ExpenseItem from './components/ExpenseItem'

const App = () => {
const expenses = [
  {
    id:'el1',
    title:'Car Insuranser',
    date:new Date(2022, 1, 25),
    price:200,
  },
  {
    id:'el2',
    title:'NoteBookr',
    date:new Date(2022, 12, 25),
    price:8,
  },
  {
    id:'el3',
    title:'Course',
    date:new Date(2022, 9, 12),
    price:180,
  },
  {
    id:'el4',
    title:'MackBook',
    date:new Date(2022, 6, 13),
    price:1180,
  },
]

  return (
    <div >

   <ExpenseItem items={expenses[0]}/>
   <ExpenseItem items={expenses[1]}/>
   <ExpenseItem items={expenses[2]}/>
   <ExpenseItem items={expenses[3]}/>

    </div>
  );
}

export default App;
