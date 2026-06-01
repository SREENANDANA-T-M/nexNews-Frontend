import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import AdminFooter from "../Components/AdminFooter";
import DashboardCards from "../Components/DashboardCards";
import FeedList from "../Components/FeedList";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-zinc-100 overflow-x-hidden">
      {/* Sidebar */}

      <AdminSidebar />

      {/* Right Section */}

      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}

        <AdminHeader />

        {/* Main Content */}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8">
            <Link
              to="/admin"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold wrap-break-word"
            >
              Dashboard
            </Link>
          </div>

          {/* Dashboard Cards */}

          <DashboardCards />

          {/* Feed List */}

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <FeedList />
          </div>
        </main>

        {/* Footer */}

        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminDashboard;