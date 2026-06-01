import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getAllNewsAPI } from "../../services/allAPI";

function CategoryPage() {
  const [allNews, setAllNews] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("Technology");

  const categories = [
    "Technology",
    "Sports",
    "Politics",
    "Business",
    "Health",
    "Entertainment",
  ];

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const result = await getAllNewsAPI();

    if (result.status === 200) {
      const publishedNews = result.data.filter(
        (item) => item.status === "Published"
      );

      setAllNews(publishedNews);
    }
  };

  const filteredNews = allNews.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <>
      <Navbar />

      {/* Category Tabs */}

      <section className="bg-white border-b sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`whitespace-nowrap pb-2 transition text-sm sm:text-base ${
                  selectedCategory === category
                    ? "text-red-600 border-b-2 border-red-600 font-semibold"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Heading */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {selectedCategory} News
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Browse the latest{" "}
          {selectedCategory.toLowerCase()} stories
        </p>
      </section>

      {/* News Grid */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredNews.map((item) => (
              <Link
                key={item._id}
                to={`/news/${item._id}`}
                className="
                  bg-white
                  rounded-xl
                  overflow-hidden
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                  flex
                  flex-col
                  h-full
                "
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="
                    w-full
                    h-48
                    sm:h-52
                    lg:h-56
                    object-cover
                  "
                />

                <div className="p-4 sm:p-5 flex flex-col grow">
                  <span className="text-red-600 text-xs sm:text-sm font-medium">
                    {item.category}
                  </span>

                  <h2 className="text-lg sm:text-xl font-bold mt-2 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-3 text-sm line-clamp-3 grow">
                    {item.shortDescription}
                  </p>

                  <p className="text-red-600 mt-4 text-sm font-medium">
                    Read Full Story →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-500">
              No {selectedCategory} News Available
            </h2>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default CategoryPage;