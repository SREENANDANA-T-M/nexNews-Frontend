import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar({
  sidebarStatus,
  setSidebarStatus,
}) {

  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const categories = [
    "Technology",
    "Sports",
    "Politics",
    "Entertainment",
    "Business",
    "Health",
  ];

  const handleSearch = () => {

    if (!keyword.trim()) return;

    navigate(
      `/search?keyword=${keyword}`
    );

    setSidebarStatus(false);

    setKeyword("");

  };

  return (
    <>
      {/* Overlay */}

      {sidebarStatus && (
        <div
          onClick={() =>
            setSidebarStatus(false)
          }
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[85%]
          sm:w-87.5
          bg-white
          shadow-xl
          z-50
          overflow-y-auto
          transform
          transition-transform
          duration-300
          ease-in-out
          ${
            sidebarStatus
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between p-4 sm:p-5 border-b">

          <h2 className="text-xl sm:text-2xl font-bold">
            Search News
          </h2>

          <button
            onClick={() =>
              setSidebarStatus(false)
            }
            className="text-xl sm:text-2xl text-red-500 hover:text-red-700 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Search Box */}

        <div className="p-4 sm:p-5">

          <input
            type="text"
            placeholder="Search news..."
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-red-500
              transition
            "
          />

          <button
            onClick={handleSearch}
            className="
              w-full
              mt-3
              bg-red-600
              text-white
              py-3
              rounded-lg
              hover:bg-red-700
              transition
            "
          >
            Search
          </button>

        </div>

        {/* Categories */}

        <div className="px-4 sm:px-5 pb-6">

          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Categories
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">

            {categories.map((item, index) => (

              <Link
                key={index}
                to={`/category/${item.toLowerCase()}`}
                onClick={() =>
                  setSidebarStatus(false)
                }
                className="
                  bg-gray-200
                  hover:bg-red-500
                  hover:text-white
                  transition
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  text-xs
                  sm:text-sm
                "
              >
                {item}
              </Link>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Sidebar;