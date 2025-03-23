import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

interface TransactionProps {
  transactions?: any;
  setTransactions?: any;
  originalTransactions: any;
  setOriginalTransactions: any;
}

const TransactionsFilters = ({
  transactions,
  setTransactions,
  originalTransactions,
  setOriginalTransactions,
}: TransactionProps) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      const filteredTransactions = transactions.filter((transaction: any) =>
        transaction.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTransactions(filteredTransactions);
    } else {
      setTransactions(originalTransactions);
    }
  };

  const handleAddTransaction = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between my-2">
        <div className="xl:w-[300px] w-[170px] h-[40px] border border-search-border/60 rounded-lg flex items-center gap-3 px-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-search-border" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none bg-transparent text-sm placeholder:text-card-border text-primary"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <button
          onClick={handleAddTransaction}
          className="h-[40px] bg-primaryButton text-white rounded-lg flex items-center gap-2 justify-center cursor-pointer px-3">
          <PlusCircleIcon className="w-5 h-5 text-white" />
          <span className="text-sm font-medium">Add transaction</span>
        </button>
      </div>
      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
          setTransactions={setOriginalTransactions}
          transactions={transactions}
        />
      )}
    </>
  );
};

export default TransactionsFilters;
