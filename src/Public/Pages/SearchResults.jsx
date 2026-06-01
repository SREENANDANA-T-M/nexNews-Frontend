import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchNewsAPI } from "../../services/allAPI";

function SearchResults() {

  const [searchParams] =
    useSearchParams();

  const keyword =
    searchParams.get("keyword");

  const [news, setNews] =
    useState([]);

  useEffect(() => {

    getSearchResults();

  }, [keyword]);

  const getSearchResults = async () => {

    const result =
      await searchNewsAPI(keyword);

    if (result.status === 200) {

      setNews(result.data);

    }

  };

  return (

    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">

        Search Results

      </h1>

      {news.length > 0 ? (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {news.map((item) => (

            <Link
              key={item._id}
              to={`/news/${item._id}`}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">

                <h2 className="font-bold text-xl">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {item.shortDescription}
                </p>

              </div>

            </Link>

          ))}

        </div>

      ) : (

        <h2 className="text-center text-2xl">
          No News Found
        </h2>

      )}

    </section>

  );

}

export default SearchResults;