import { Link } from "react-router-dom";

function NewsCard({ news }) {
  if (!news) return null;

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        h-full
        flex
        flex-col
      "
    >
      {/* Image */}

      <img
        src={news.imageUrl}
        alt={news.title}
        className="
          w-full
          h-48
          sm:h-52
          lg:h-56
          object-cover
        "
      />

      {/* Content */}

      <div className="p-4 sm:p-5 flex flex-col grow">
        {/* Category */}

        <p className="text-red-500 text-xs sm:text-sm font-semibold mb-2 uppercase">
          {news.category}
        </p>

        {/* Title */}

        <h2
          className="
            text-lg
            sm:text-xl
            font-bold
            mb-3
            line-clamp-2
          "
        >
          {news.title}
        </h2>

        {/* Description */}

        <p
          className="
            text-gray-600
            text-sm
            leading-6
            mb-4
            line-clamp-3
            grow
          "
        >
          {news.shortDescription}
        </p>

        {/* Read More */}

        <Link
          to={`/news/${news._id}`}
          className="
            text-red-500
            font-semibold
            hover:text-red-600
            hover:underline
            transition
            mt-auto
          "
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;