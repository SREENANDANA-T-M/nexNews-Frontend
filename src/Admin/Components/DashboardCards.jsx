import { useEffect, useState } from "react";
import {
  getDashboardStatsAPI,
} from "../../services/allAPI";

function DashboardCards() {

  const [stats, setStats] = useState({
    totalNews: 0,
    draftNews: 0,
    scheduledNews: 0,
    publishedNews: 0,
  });

  const getStats = async () => {

    const result =
      await getDashboardStatsAPI();

    if (result.status === 200) {

      setStats(result.data);

    }

  };

  useEffect(() => {

    getStats();

  }, []);

  const cards = [
    {
      title: "Total News",
      count: stats.totalNews,
    },
    {
      title: "Draft",
      count: stats.draftNews,
    },
    {
      title: "Scheduled",
      count: stats.scheduledNews,
    },
    {
      title: "Published",
      count: stats.publishedNews,
    },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((item, index) => (

        <div
          key={index}
          className="
            bg-white
            shadow-md
            rounded-xl
            p-5 md:p-6
            hover:shadow-xl
            transition
            duration-300
          "
        >

          <h3 className="text-sm md:text-base text-gray-500">
            {item.title}
          </h3>

          <p className="text-3xl md:text-4xl font-bold mt-3 text-zinc-800">
            {item.count}
          </p>

        </div>

      ))}

    </div>

  );
}

export default DashboardCards;