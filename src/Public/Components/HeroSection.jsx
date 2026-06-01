function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}

      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
        alt="Breaking News"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          {/* Badge */}

          <p className="bg-red-600 inline-block px-3 sm:px-4 py-1 rounded mb-4 text-xs sm:text-sm">
            Breaking News
          </p>

          {/* Heading */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Stay Updated With The Latest Global Headlines
          </h1>

          {/* Description */}

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Read trending stories from technology, politics,
            entertainment, sports and more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;