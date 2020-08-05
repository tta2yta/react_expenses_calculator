import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4'

const initialExpenses=[{id:uuid(), charge:"rent", amount:1900},
{id:uuid(), charge:"car payment", amount:1200},
{id:uuid(), charge:"credit card bill", amount:1300}];

function App() {
   const [expenses, setExpenses]= useState(initialExpenses);
   
 /************state  values ********/


  // single expense
  const [charge, setCharge]= useState('')

  //single amount
  const[amount, setAmount]= useState('')

  //set alert
  const [alert, setAlert]=useState({show:false})

  //Edit
const[edit, setEdit]=useState(false)

//edit item
const[id, setId]= useState(0)


 /******** functionality**********/

 const handleCharge= e =>{
  //console.log(e.target.value)
  setCharge(e.target.value)
}
const handleAmountt=e =>{
  setAmount(e.target.value)
}

const handleAlert=({type, text})=>{
setAlert({show:true, type:type, text})
setTimeout(()=>{
setAlert({show:false})
}, 3000)
}

const handleSubmit=e =>{
  e.preventDefault();

if(charge !=='' && amount > 0){
if(edit)
{
let tempExpense=expenses.map(item => {
  return item.id===id? {...item,charge,amount} : item
})
setExpenses(tempExpense)
setEdit(false)
handleAlert({type:"success", text:`Item Edited`})
}
else{
const singleExpense={id:uuid(), charge:charge, amount}
setExpenses([...expenses, singleExpense])
handleAlert({type:"success", text:"Item Added"})
}
setCharge('')
setAmount('')
}

else {
//handle alert call
handleAlert({type:"danger", text:`Charge can't be empty value and amount 
value has to be bigger than zero`})
}

}


 //clear Items
 const clearItems=()=>{
  //console.log("cleared all items")
  setExpenses([])
  handleAlert({type:"danger", text:`All Items Deleted`})
}

//handle delete
const handleDelete = (id) => {

  let tempExpenses= expenses.filter(item=> item.id!==id)
  setExpenses(tempExpenses)
  handleAlert({type:"danger", text:`item Deleted`})
  //console.log(`item deleted : ${id}`)
}

//handle Edit
const handleEdit = (id) =>{
  let expense= expenses.find(item => item.id===id)
  //console.log(`item edited ${id}`)
 // console.log(expense)

 let {charge, amount}=expense
 setCharge(charge)
 setAmount(amount)
 setEdit(true)
 setId(id)
}



  return (
    <>
      
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      
      <h2>Budget Calculator</h2>
      <main className="App"> 
      <ExpenseForm charge={charge} amount={amount} 
      handleCharge={handleCharge} handleAmount={handleAmountt}
       handleSubmit={handleSubmit} 
       edit={edit}
      />
      <ExpenseList expenses={expenses} handleDelete={handleDelete}
      handleEdit={handleEdit} clearItems={clearItems} />
        </main>
        <h1>Total amount : <span className="total">
${expenses.reduce((acc, curr)=>{
return (acc+= parseInt(curr.amount));
},0)} 

        </span> </h1>
      
    </>
  );
}

export default App;
