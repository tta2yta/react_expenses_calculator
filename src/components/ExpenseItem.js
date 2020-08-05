import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
 const ExpenseItem = ({expense, handleDelete, handleEdit}) => {

	const {id, charge, amount}=expense
	//id=expenses[0]
    return (
       <li className="item">
       <div className="info">
 <span className="expense">{charge}</span>
    <span className="amount">${amount}</span>
</div>
<div>
    <button className="edit-btn" arial-label="edit button"
    onClick={() => handleEdit(id)}>
        <MdEdit />
    </button>
    <button className="clear-btn" arial-label="delete button"
    onClick={()=> handleDelete(id)}>
        <MdDelete />
    </button>
</div>
       </li>
    )
}
 export default ExpenseItem;