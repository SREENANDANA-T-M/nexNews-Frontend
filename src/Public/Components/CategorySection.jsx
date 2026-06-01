import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getAllNewsAPI } from "../../services/allAPI";

function CategorySection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const result = await getAllNewsAPI();

    if (result.status === 200) {
      // Exclude latest 5 news already shown in slider
      const remainingNews = result.data.slice(5);

      setNews(remainingNews);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Latest News
        </h2>

        <button
          className="
            w-full sm:w-auto
            bg-black
            text-white
            px-5 py-2.5
            rounded-lg
            hover:bg-red-600
            transition
          "
        >
          View All
        </button>
      </div>

      {/* News Grid */}

      {news.length > 0 ? (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5 sm:gap-6 lg:gap-8
          "
        >
          {news.map((item) => (
            <NewsCard
              key={item._id}
              news={item}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-10">
          <h2 className="text-lg sm:text-xl text-gray-500">
            No News Available
          </h2>
        </div>
      )}
    </section>
  );
}

export default CategorySection;