import React, { useState } from "react";

function AddTransactionForm() {
  const [formData,setFormData]=useState({name:"",description:"",category:"",amount:""})

  function handleSubmit(){
    const newFormData={
        name: formData.name,
        description: formData.description,
        category: formData.category,
        amount: formData.amount
    }
    fetch("http://localhost:8001/transactions",{
      method: 'POST',
      headers : {
        "Content-Type" :"application/json"
      },
      body : JSON.stringify(newFormData)
    })
    .then(res=>res.json())
    .then(()=>setFormData((newFormData)=>newFormData))
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.name}/>
          <input type="text" name="description" placeholder="Description" value={formData.description}/>
          <input type="text" name="category" placeholder="Category" value={formData.category}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
