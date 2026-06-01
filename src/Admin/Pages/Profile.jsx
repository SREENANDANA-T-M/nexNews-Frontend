import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import AdminFooter from "../Components/AdminFooter";

import {
  getProfileAPI,
  updateProfileAPI,
  changePasswordAPI,
} from "../../services/allAPI";

function Profile() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      getProfile();
    }
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getProfileAPI(reqHeader);

    if (result.status === 200) {
      setProfileData({
        name: result.data.name,
        email: result.data.email,
      });
    }
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await updateProfileAPI(
      profileData,
      reqHeader
    );

    if (result.status === 200) {
      alert("Profile Updated Successfully");
    } else {
      alert("Failed To Update Profile");
    }
  };

  const handleChangePassword = async () => {
    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert("Passwords Do Not Match");
      return;
    }

    const token = localStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await changePasswordAPI(
      passwordData,
      reqHeader
    );

    if (result.status === 200) {
      alert("Password Updated Successfully");

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      alert(
        result.response?.data?.message ||
          "Failed To Change Password"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-100 overflow-x-hidden">
      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="flex flex-col flex-1 min-w-0">
        <AdminHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              {/* Profile Header */}

              <div className="flex flex-col items-center text-center">
                <FaUserCircle className="text-6xl sm:text-7xl lg:text-8xl text-zinc-700 mb-4" />

                <h1 className="text-2xl sm:text-3xl font-bold">
                  Admin Profile
                </h1>

                <p className="text-gray-500 text-sm sm:text-base">
                  Content Administrator
                </p>
              </div>

              {/* Profile Form */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        email: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* Update Button */}

              <div className="mt-6">
                <button
                  onClick={handleUpdateProfile}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Update Profile
                </button>
              </div>

              <hr className="my-8 sm:my-10" />

              {/* Password Section */}

              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Change Password
              </h2>

              <div className="space-y-4 sm:space-y-5">
                <input
                  type="password"
                  placeholder="Current Password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                />
              </div>

              {/* Password Button */}

              <div className="mt-6 sm:mt-8">
                <button
                  onClick={handleChangePassword}
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </main>

        <AdminFooter />
      </div>
    </div>
  );
}

export default Profile;