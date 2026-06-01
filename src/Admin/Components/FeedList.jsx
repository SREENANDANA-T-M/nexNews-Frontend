import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  deleteNewsAPI,
  getAllNewsAPI,
  publishNewsAPI,
  scheduleNewsAPI,
} from "../../services/allAPI";

function FeedList() {
  const [activeTab, setActiveTab] = useState("All");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [news, setNews] = useState([]);

  const navigate = useNavigate();

  const tabs = ["All", "Draft", "Scheduled", "Published"];

  const getAllNews = async () => {
    const result = await getAllNewsAPI();

    if (result.status === 200) {
      setNews(result.data);
    } else {
      console.log(result);
    }
  };

  const handleDeleteNews = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?"
    );

    if (!confirmDelete) return;

    const result = await deleteNewsAPI(id);

    if (result.status === 200) {
      alert("News Deleted Successfully");
      getAllNews();
    } else {
      alert("Delete Failed");
    }
  };

  const handleScheduleNews = async () => {
    if (!scheduleDate) {
      alert("Select Schedule Date");
      return;
    }

    const result = await scheduleNewsAPI(selectedNewsId, {
      scheduleDate,
    });

    if (result.status === 200) {
      alert("News Scheduled Successfully");

      setShowScheduleModal(false);
      setScheduleDate("");
      getAllNews();
    } else {
      alert("Failed To Schedule");
    }
  };

  const handlePublishNews = async (id) => {
    const result = await publishNewsAPI(id);

    if (result.status === 200) {
      alert("News Published Successfully");
      getAllNews();
    } else {
      alert("Failed To Publish");
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const filteredNews =
    activeTab === "All"
      ? news
      : news.filter(
          (item) =>
            item.status.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <div className="w-full">
      {/* Heading */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Feed List
        </h2>
      </div>

      {/* Tabs */}

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-5 py-2 rounded-lg font-medium transition text-sm sm:text-base
            ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-white text-zinc-700 border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Empty State */}

      {filteredNews.length === 0 ? (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">
            No News Available
          </h2>
        </div>
      ) : (
        <div className="space-y-5 sm:space-y-6">
          {filteredNews.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full lg:w-72 h-52 sm:h-60 lg:h-auto object-cover"
                />

                {/* Content */}

                <div className="flex-1 p-4 sm:p-6">
                  {/* Category & Status */}

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs sm:text-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>

                    <span
                      className={`text-xs sm:text-sm px-3 py-1 rounded-full
                      ${
                        item.status === "Published"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : item.status === "Scheduled"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 wrap-break-word">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {item.shortDescription}
                  </p>

                  {/* Date */}

                  <p className="text-gray-500 text-sm mb-5">
                    Created :{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>

                  {/* Scheduled Date */}

                  {item.status === "Scheduled" &&
                    item.scheduleDate && (
                      <p className="text-purple-600 text-sm mb-4">
                        Scheduled For :{" "}
                        {new Date(
                          item.scheduleDate
                        ).toLocaleString()}
                      </p>
                    )}

                  {/* Actions */}

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                    <button
                      onClick={() =>
                        navigate(`/edit-news/${item._id}`)
                      }
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <FaEdit />
                      Edit
                    </button>

                    {item.status === "Draft" && (
                      <button
                        onClick={() => {
                          setSelectedNewsId(item._id);
                          setShowScheduleModal(true);
                        }}
                        className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                      >
                        <FaCalendarAlt />
                        Schedule
                      </button>
                    )}

                    {item.status !== "Published" && (
                      <button
                        onClick={() =>
                          handlePublishNews(item._id)
                        }
                        className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        <FaCheckCircle />
                        Publish
                      </button>
                    )}

                    <button
                      onClick={() =>
                        handleDeleteNews(item._id)
                      }
                      className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Schedule Modal */}

      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-5 sm:p-6 w-[95%] sm:w-112.5">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Schedule News
            </h2>

            <input
              type="datetime-local"
              value={scheduleDate}
              onChange={(e) =>
                setScheduleDate(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  setScheduleDate("");
                }}
                className="bg-gray-500 text-white px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleScheduleNews}
                className="bg-purple-600 text-white px-5 py-2 rounded-lg"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedList;