import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseTitle = props.items.title
    const expenseDate = props.items.date
    const month = props.expenseDate.toLocaleString('En-us', { month: 'long' })
    const day = props.expenseDate.toLocaleString('En-us', { day: '2-dighit' })
    const year = props.expenseDate.getFullYear()
    const expensePrice = props.items.price
    return(
        <div className='expense-item'>
         <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
         </div>
            <h2 className='expense-item__description'>{expenseTitle}</h2>
            <div className='expense-item__price'>${expensePrice}</div>
        </div>
    ) 

}

export default ExpenseItem