"use client"
import addTransaction from '@/app/actions/addTransaction'
import React from 'react'

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const {data, error} = await addTransaction(formData);

    if(error) {
      alert(error);
    } else {
      alert('Transaction added');
      console.log(data);
      
    }
    
  }
  return (
    <>
    <h3>Add transaction</h3>
    <form action={clientAction}>
      <div className="form-control">
        <label htmlFor="text"></label>
        <input type="text" id="text" name="text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br /> (negetive = expense, positive = income)</label>
        <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01"/>
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction
