import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

function Navbar({ setSidebarStatus }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 sm:px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
        >
          <FaNewspaper className="text-red-500" />
          NexNews
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            to="/category"
            className="hover:text-red-500 transition"
          >
            Categories
          </Link>

          <Link
            to="/about"
            className="hover:text-red-500 transition"
          >
            Why Us
          </Link>

          <Link
            to="/contactUs"
            className="hover:text-red-500 transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="hover:text-red-500 transition"
          >
            Admin
          </Link>
        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-4">
          {/* Search */}

          <button
            onClick={() => setSidebarStatus(true)}
            className="text-lg sm:text-xl hover:text-red-500 transition"
          >
            <FaSearch />
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-lg sm:text-xl hover:text-red-500 transition"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden mt-4 border-t border-zinc-800 pt-4">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-red-500 transition"
            >
              Home
            </Link>

            <Link
              to="/category"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-red-500 transition"
            >
              Categories
            </Link>

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-red-500 transition"
            >
              Why Us
            </Link>

            <Link
              to="/contactUs"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-red-500 transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-red-500 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;