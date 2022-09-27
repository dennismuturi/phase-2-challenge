import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions}) {
  return (
    <div>
      <Search transactions={transactions}/>
      <AddTransactionForm transactions={transactions}/>
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
