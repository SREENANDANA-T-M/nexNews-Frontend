import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getANewsAPI } from "../../services/allAPI";

function SingleNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const result = await getANewsAPI(id);

    if (result.status === 200) {
      setNews(result.data);
    }
  };

  if (!news) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-zinc-100 min-h-screen py-8 sm:py-10 lg:py-12 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}

        <button
          onClick={() => navigate("/")}
          className="
            mb-6
            w-full
            sm:w-auto
            bg-black
            text-white
            px-5
            py-3
            rounded-lg
            hover:bg-red-600
            transition
          "
        >
          ← Back to Home
        </button>

        {/* Featured Image */}

        <img
          src={news.imageUrl}
          alt={news.title}
          className="
            w-full
            h-62.5
            sm:h-100
            lg:h-125
            object-cover
            rounded-xl
          "
        />

        {/* Category */}

        <div className="mt-6">
          <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm">
            {news.category}
          </span>
        </div>

        {/* Title */}

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight">
          {news.title}
        </h1>

        {/* Date */}

        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          {new Date(news.createdAt).toLocaleDateString()}
        </p>

        {/* Short Description */}

        <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 text-gray-700 leading-7">
          {news.shortDescription}
        </p>

        {/* Content */}

        <div className="mt-8 sm:mt-10 bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow">
          <p
            className="
              leading-7
              sm:leading-8
              text-sm
              sm:text-base
              text-gray-700
              whitespace-pre-line
              wrap-break-word
            "
          >
            {news.content}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleNews;