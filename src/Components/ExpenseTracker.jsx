import React, { useState } from "react";

// ✅ ExpenseTracker Component
const ExpenseTracker = () => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const addExpense = () => {
    if (!label.trim()) {
      setError("Label is required");
      return;
    }
    if (isNaN(amount) || amount === "") {
      setError("Amount must be a valid number");
      return;
    }

    const newExpense = { id: Date.now(), label, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);
    setLabel("");
    setAmount("");
    setError("");
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3">Expense Tracker</h3>

      {/* Input Fields */}
      <div className="flex space-x-2 mb-2">
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-32 px-3 py-2 border rounded-md"
        />
        <button
          onClick={addExpense}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Expense List */}
      <ul className="mb-2">
        {expenses.map((e) => (
          <li key={e.id} className="flex justify-between">
            <span>{e.label}</span>
            <span>${e.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {/* Total */}
      <p className="font-semibold">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseTracker;

