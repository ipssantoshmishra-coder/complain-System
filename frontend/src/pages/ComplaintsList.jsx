import { useEffect, useState } from "react";
import axios from "axios";

function ComplaintsList() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get("/api/complaints");
        setComplaints(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load complaints");
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);

  if (loading) return <p className="text-gray-500">Loading complaints...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Complaints</h2>
      {complaints.length === 0 ? (
        <p className="text-gray-600">No complaints yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {complaints.map((c) => (
            <div
              key={c._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="text-gray-600">{c.email}</p>
              <p className="mt-2">{c.complaint}</p>
              <td className="p-2">{c.sentiment}</td>
              <td className="p-2">{c.solution}</td>
              <span className="mt-2 inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                {c.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ComplaintsList;