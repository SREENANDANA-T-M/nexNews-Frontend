import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { useEffect, useState } from "react";
import { getLatestNewsAPI } from "../../services/allAPI";

function RecentNewsSlider() {
  const [recentNews, setRecentNews] = useState([]);

  useEffect(() => {
    getLatestNews();
  }, []);

  const getLatestNews = async () => {
    try {
      const result = await getLatestNewsAPI();

      if (result.status === 200) {
        setRecentNews(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative bg-linear-to-b from-zinc-950 via-zinc-900 to-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-14 text-white">
          Latest Headlines
        </h2>

        {recentNews.length > 0 ? (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={recentNews.length > 3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 200,
              modifier: 1.5,
              scale: 0.9,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full"
          >
            {recentNews.map((news) => (
              <SwiperSlide
                key={news._id}
                className="max-w-full sm:max-w-87.5 lg:max-w-95"
              >
                <div className="relative h-87.5 sm:h-105 lg:h-125 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image */}

                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200";
                    }}
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                  {/* Content */}

                  <div className="absolute bottom-0 left-0 p-4 sm:p-5 lg:p-6 text-white">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-medium">
                      {news.category}
                    </span>

                    <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-bold leading-tight line-clamp-3">
                      {news.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300">
                      {new Date(
                        news.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-white text-lg sm:text-xl">
            No Published News Available
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentNewsSlider;