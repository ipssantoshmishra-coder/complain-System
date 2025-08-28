import { useState } from "react";
import axios from "axios";

function ComplaintForm() {
  const [form, setForm] = useState({ name: "", email: "", complaint: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/complaints", form);
    setForm({ name: "", email: "", complaint: "" });
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="bg-white p-6 shadow rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        📝 Submit a Complaint
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="complaint"
          placeholder="Write your complaint..."
          value={form.complaint}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 h-28"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;