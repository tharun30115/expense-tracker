import RecentTransactions from "./RecentTransactions";
import Cards from "./Cards";
import TransactionsFilters from "./TransactionsFilters";
import { useEffect, useState } from "react";
import { initialTransactions } from "../data";

const Dashboard = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(initialTransactions);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  return (
    <div className="xl:w-[70%] w-full flex flex-col xl:py-7 xl:pl-7 xl:pr-5 p-5 h-full">
      <div className="flex flex-col gap-1">
        <span className="text-3xl font-bold text-primary">Hey There SquishyTraveller!</span>
        <span className="text-sm text-primary">We're here to help you manage your finances</span>
      </div>
      <span className="font-semibold text-primary mt-10">Your cards</span>
      <Cards />
      <span className="font-semibold text-primary mt-10 mb-2">Recent transactions</span>
      <TransactionsFilters
        transactions={transactions}
        setTransactions={setFilteredTransactions}
        originalTransactions={transactions}
        setOriginalTransactions={setTransactions}
      />
      <RecentTransactions
        transactions={filteredTransactions}
        setTransactions={setFilteredTransactions}
        setOriginalTransactions={setTransactions}
      />
    </div>
  );
};

export default Dashboard;
