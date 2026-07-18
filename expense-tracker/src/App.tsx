import { useEffect, useState } from "react";
import "./index.css";

interface Expense {
  id: string;
  label: string;
  amount: number;
  category: string;
}

const categories = [
  "All",
  "Food",
  "Shopping",
  "Transport",
  "Bills",
  "Entertainment",
  "Other",
];

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [editId, setEditId] = useState<string | null>(null);


  // Load expenses when app starts
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);


  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!label.trim() || !amount) {
      return;
    }


    if (editId) {

      setExpenses((previous) =>
        previous.map((expense) =>
          expense.id === editId
            ? {
                ...expense,
                label,
                amount: Number(amount),
                category,
              }
            : expense
        )
      );

      setEditId(null);

    } else {

      const newExpense: Expense = {
        id: crypto.randomUUID(),
        label,
        amount: Number(amount),
        category,
      };

      setExpenses((previous) => [
        ...previous,
        newExpense,
      ]);
    }


    setLabel("");
    setAmount("");
    setCategory("Food");
  }


  function deleteExpense(id: string) {

    setExpenses((previous) =>
      previous.filter(
        (expense) => expense.id !== id
      )
    );

  }


  function startEdit(expense: Expense) {

    setEditId(expense.id);
    setLabel(expense.label);
    setAmount(String(expense.amount));
    setCategory(expense.category);

  }


  const filteredExpenses = expenses.filter(
    (expense) => {

      const categoryMatch =
        filter === "All" ||
        expense.category === filter;


      const searchMatch =
        expense.label
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );


      return categoryMatch && searchMatch;

    }
  );


  const total = filteredExpenses.reduce(
    (sum, expense) =>
      sum + expense.amount,
    0
  );


  const average =
    filteredExpenses.length > 0
      ? total / filteredExpenses.length
      : 0;


  const biggestExpense =
    filteredExpenses.length > 0
      ? Math.max(
          ...filteredExpenses.map(
            (expense) => expense.amount
          )
        )
      : 0;


  return (
    <div className="container">

      <h1>
        💰 Personal Expense Tracker
      </h1>


      <form
        className="form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Expense name"
          value={label}
          onChange={(e) =>
            setLabel(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          {categories
            .filter((c) => c !== "All")
            .map((c) => (
              <option key={c}>
                {c}
              </option>
            ))}

        </select>


        <button type="submit">
          {editId
            ? "Update Expense"
            : "Add Expense"}
        </button>


      </form>
            <div className="toolbar">

        <input
          className="search"
          type="text"
          placeholder="Search expense..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          {categories.map((c) => (
            <option key={c}>
              {c}
            </option>
          ))}

        </select>

      </div>


      <div className="summary">

        <div className="card">
          <h3>Total</h3>
          <p>
            ${total.toFixed(2)}
          </p>
        </div>


        <div className="card">
          <h3>Number of Expenses</h3>
          <p>
            {filteredExpenses.length}
          </p>
        </div>


        <div className="card">
          <h3>Average</h3>
          <p>
            ${average.toFixed(2)}
          </p>
        </div>

      </div>



      <div className="list">


        {filteredExpenses.length === 0 ? (

          <div className="empty">

            <h2>
              No expenses found
            </h2>

            <p>
              Add an expense to start tracking.
            </p>

          </div>


        ) : (


          filteredExpenses.map((expense) => (

            <div
              key={expense.id}
              className={
                expense.amount === biggestExpense
                  ? "expense biggest"
                  : "expense"
              }
            >


              <div className="expense-info">

                <h3>
                  {expense.label}
                </h3>


                <span className="category">
                  {expense.category}
                </span>

              </div>



              <div className="expense-actions">


                <h2>
                  ${expense.amount}
                </h2>



                <button
                  className="edit"
                  onClick={() =>
                    startEdit(expense)
                  }
                >
                  Edit
                </button>



                <button
                  className="delete"
                  onClick={() =>
                    deleteExpense(expense.id)
                  }
                >
                  Delete
                </button>


              </div>


            </div>

          ))

        )}


      </div>
          </div>
  );
}

export default App;