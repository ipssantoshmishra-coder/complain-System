function Navbar() {
  return (
    <header className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Complaint Management Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 00-14 0v4l-2 2v1h18v-1l-2-2z"
            />
          </svg>
        </button>
        <span className="text-gray-600">Hello, Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
          alt="admin"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}

export default Navbar;