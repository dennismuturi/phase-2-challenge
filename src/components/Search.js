import React, { useState } from "react";
import TransactionsList from "./TransactionsList";

function Search({transactions}) {
  const [myTransactions,setMyTransactions]=useState(transactions);
  const [searchTerm,setSearchTerm]=useState(0);

  function handleChange() {
    const newTransactions=myTransactions.filter((myTransaction)=>{
        return ( myTransaction.description !== searchTerm ) 
    })
    setMyTransactions(newTransactions);
    setSearchTerm("");
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => handleChange}
        value={searchTerm}
      />
      <i className="circular search link icon"></i>
      <TransactionsList myTransactions={myTransactions}/>
    </div>
  );
}

export default Search;
