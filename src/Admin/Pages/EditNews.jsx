import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import AdminFooter from "../Components/AdminFooter";
import {
  getANewsAPI,
  updateNewsAPI,
} from "../../services/allAPI";

function EditNews() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    imageUrl: "",
    shortDescription: "",
    content: "",
    status: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    getNewsDetails();
  }, []);

  const getNewsDetails = async () => {
    const result = await getANewsAPI(id);

    if (result.status === 200) {
      setNewsData(result.data);
    } else {
      console.log(result);
    }
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();

    const result = await updateNewsAPI(
      id,
      newsData
    );

    if (result.status === 200) {
      alert("News Updated Successfully");
      navigate("/admin");
    } else {
      alert("Failed To Update");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-100 overflow-x-hidden">
      {/* Sidebar */}

      <AdminSidebar />

      {/* Content */}

      <div className="flex flex-col flex-1 min-w-0">
        <AdminHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}

            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Edit News
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Update and manage news articles.
              </p>
            </div>

            {/* Form */}

            <form
              onSubmit={handleUpdateNews}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
            >
              {/* Title */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  News Title
                </label>

                <input
                  type="text"
                  value={newsData.title}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      title: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                />
              </div>

              {/* Category */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  Category
                </label>

                <select
                  value={newsData.category}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      category: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                >
                  <option>Technology</option>
                  <option>Sports</option>
                  <option>Politics</option>
                  <option>Business</option>
                  <option>Health</option>
                  <option>Entertainment</option>
                </select>
              </div>

              {/* Image URL */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  value={newsData.imageUrl}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      imageUrl: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                />
              </div>

              {/* Short Description */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  Short Description
                </label>

                <textarea
                  rows={4}
                  value={newsData.shortDescription}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      shortDescription:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:border-red-600"
                />
              </div>

              {/* Content */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  News Content
                </label>

                <textarea
                  rows={10}
                  value={newsData.content}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      content: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:border-red-600"
                />
              </div>

              {/* Status */}

              <div className="mb-6">
                <label className="block font-medium mb-2">
                  Status
                </label>

                <input
                  type="text"
                  value={newsData.status}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
                />
              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Update News
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="w-full sm:w-auto bg-zinc-800 text-white px-8 py-3 rounded-lg hover:bg-black transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>

        <AdminFooter />
      </div>
    </div>
  );
}

export default EditNews;