import React, {useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  console.log(searchTerm);

  return (
    <div>
      <Search setSearchTerm={(search) => setSearchTerm(search)} />
      <AddTransactionForm transactions={transactions} />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
