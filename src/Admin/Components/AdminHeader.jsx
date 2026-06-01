import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminHeader() {

  const navigate = useNavigate();

  return (
    <header className="bg-black border-b border-zinc-800 px-4 md:px-8 py-4">

      <div className="flex items-center justify-between">

        {/* Left Side */}

        <div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            NexNews Admin
          </h2>

          <p className="text-xs md:text-sm text-gray-400">
            Content Management Dashboard
          </p>

        </div>

        {/* Right Side */}

        <div
          onClick={() => navigate("/profile")}
          className="
            flex
            items-center
            gap-2 md:gap-3
            cursor-pointer
            hover:bg-zinc-800
            px-2 md:px-3
            py-2
            rounded-lg
            transition
          "
        >

          <FaUserCircle className="text-3xl md:text-4xl text-gray-300" />

          <div className="hidden sm:block">

            <p className="text-white text-sm md:text-base font-medium">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default AdminHeader;