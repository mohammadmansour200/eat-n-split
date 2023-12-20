import { useState } from "react";
import Button from "../button/Button";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("user");

  const friendExpense = bill ? bill - expense : "";

  const friendName = selectedFriend.name;

  function handleSumbit(e) {
    e.preventDefault();

    if (!bill || !expense) return;

    onSplitBill(payer === "user" ? friendExpense : -expense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSumbit}>
      <h2>Split a bill with {friendName}</h2>

      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expenses</label>
      <input
        type="number"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>{friendName}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
