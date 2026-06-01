import { useState, useEffect } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import AdminFooter from "../Components/AdminFooter";
import { useNavigate } from "react-router-dom";
import { addNewsAPI } from "../../services/allAPI";

function CreateNews() {
  const [newsData, setNewsData] = useState({
    title: "",
    category: "Technology",
    imageUrl: "",
    shortDescription: "",
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSaveNews = async (e) => {
    e.preventDefault();

    const {
      title,
      category,
      imageUrl,
      shortDescription,
      content,
    } = newsData;

    if (
      !title ||
      !category ||
      !imageUrl ||
      !shortDescription ||
      !content
    ) {
      alert("Please fill all fields");
      return;
    }

    const result = await addNewsAPI(newsData);

    if (result.status === 200) {
      alert("News Added Successfully");

      setNewsData({
        title: "",
        category: "Technology",
        imageUrl: "",
        shortDescription: "",
        content: "",
        status: "Draft",
        scheduleDate: "",
      });
    } else {
      alert("Failed to Add News");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-100 overflow-x-hidden">
      {/* Sidebar */}

      <AdminSidebar />

      {/* Right Section */}

      <div className="flex flex-col flex-1 min-w-0">
        <AdminHeader />

        {/* Main Content */}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}

            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Create News
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Create and publish a new article.
              </p>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSaveNews}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
            >
              {/* News Title */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  News Title
                </label>

                <input
                  type="text"
                  placeholder="Enter news title"
                  value={newsData.title}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      title: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
                >
                  <option>Technology</option>
                  <option>Sports</option>
                  <option>Politics</option>
                  <option>Business</option>
                  <option>Health</option>
                  <option>Entertainment</option>
                </select>
              </div>

              {/* Thumbnail URL */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  Thumbnail Image
                </label>

                <input
                  type="text"
                  placeholder="Paste Image URL"
                  value={newsData.imageUrl}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      imageUrl: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
                />
              </div>

              {/* Short Description */}

              <div className="mb-5 sm:mb-6">
                <label className="block font-medium mb-2">
                  Short Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter short description..."
                  value={newsData.shortDescription}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      shortDescription: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:border-red-600 outline-none"
                />
              </div>

              {/* News Content */}

              <div className="mb-6">
                <label className="block font-medium mb-2">
                  News Content
                </label>

                <textarea
                  rows={10}
                  placeholder="Write full news content..."
                  value={newsData.content}
                  onChange={(e) =>
                    setNewsData({
                      ...newsData,
                      content: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:border-red-600 outline-none"
                />
              </div>

              {/* Button */}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Save News
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

export default CreateNews;