import React, { useState } from "react";
function AddTransactionForm({ transactions }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newFormData = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      amount: formData.amount,
    };
    fetch(
      'http://localhost:8001/transactions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        transactions.map((tran) => {
          console.log(tran);
        });
        console.log(transactions);
        setFormData({
          name: '',
          description: '',
          category: '',
          amount: '',
        });
      });
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={(e) => {
              setFormData({ ...formData, amount: e.target.value });
            }}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
