import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintsList from "./pages/ComplaintsList";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<ComplaintForm />} />
          <Route path="/complaints" element={<ComplaintsList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;