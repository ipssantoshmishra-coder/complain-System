import { Link, useLocation } from "react-router-dom";
import {
  PencilSquareIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-700 text-white"
      : "text-blue-100 hover:bg-blue-500 hover:text-white";

  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-blue-500">
        ComplaintSys
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isActive(
            "/"
          )}`}
        >
          <PencilSquareIcon className="h-5 w-5" />
          <span>New Complaint</span>
        </Link>
        <Link
          to="/complaints"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isActive(
            "/complaints"
          )}`}
        >
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <span>Complaints</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-blue-500 text-sm text-blue-200">
        © 2025 ComplaintSys
      </div>
    </aside>
  );
}

export default Sidebar;