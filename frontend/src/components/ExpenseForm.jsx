import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
    vendor: "",
    receipt: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, receipt: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      ...form,
      status: "Pending",
      finalStatus: null,
      fileUrl: preview,
    });

    alert("Expense Submitted!");

    // 🔄 Reset form
    setForm({
      amount: "",
      category: "",
      description: "",
      date: "",
      vendor: "",
      receipt: null,
    });
    setPreview(null);
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl mt-6">
      <h2 className="text-xl mb-4">Raise Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Office">Office</option>
        </select>

        {/* 🔥 Dynamic Field */}
        {form.category === "Food" && (
          <input
            type="text"
            name="vendor"
            placeholder="Restaurant Name"
            value={form.vendor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {form.category === "Travel" && (
          <input
            type="text"
            name="vendor"
            placeholder="City Travelled To"
            value={form.vendor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {form.category === "Office" && (
          <input
            type="text"
            name="vendor"
            placeholder="Office Name"
            value={form.vendor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* File Upload */}
        <input
          type="file"
          onChange={handleFile}
          className="w-full p-2 border rounded"
        />

        {/* 🔥 File Preview Box */}
        {preview && (
          <div className="border p-3 rounded bg-gray-100">
            <p className="text-sm">Selected File:</p>
            <img src={preview} alt="preview" className="w-24 mt-2 rounded" />
          </div>
        )}

        <button className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;