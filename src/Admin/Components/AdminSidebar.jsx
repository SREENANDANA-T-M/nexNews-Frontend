import {
  FaBars,
  FaTimes,
  FaUser,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminSidebar() {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setSidebarOpen(true)}
        className="
          md:hidden
          fixed
          top-4
          left-4
          z-50
          bg-black
          text-white
          p-3
          rounded-lg
        "
      >
        <FaBars />
      </button>

      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            md:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          fixed md:static
          top-0 left-0
          z-50
          h-screen
          w-64
          bg-black
          text-white
          p-6
          transform
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* Close Button Mobile */}

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-2xl font-bold text-red-600">
            NexNews
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-xl"
          >
            <FaTimes />
          </button>

        </div>

        <div className="space-y-4">

          <Link
            to="/admin"
            onClick={() => setSidebarOpen(false)}
            className="block p-3 rounded hover:bg-zinc-900"
          >
            Dashboard
          </Link>

          <Link
            to="/create-news"
            onClick={() => setSidebarOpen(false)}
            className="p-3 rounded hover:bg-zinc-900 flex items-center gap-2"
          >
            <FaPlus />
            Create News
          </Link>

          <Link
            to="/profile"
            onClick={() => setSidebarOpen(false)}
            className="p-3 rounded hover:bg-zinc-900 flex items-center gap-2"
          >
            <FaUser />
            Profile
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="w-full text-left p-3 rounded hover:bg-zinc-900 flex items-center gap-2 text-red-500"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

      {/* Logout Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-100">

          <div className="bg-white rounded-xl p-6 md:p-8 w-[90%] max-w-md">

            <h2 className="text-2xl font-bold mb-4">
              Logout
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default AdminSidebar;