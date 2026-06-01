import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600"
          alt="About NexNews"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
              About NexNews
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200">
              Delivering trusted stories that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
          NexNews is a modern digital news platform committed to
          delivering accurate, timely, and unbiased news from around
          the world.

          <br />
          <br />

          Our goal is to provide readers with trustworthy journalism,
          insightful reporting, and real-time updates across
          technology, politics, sports, business, entertainment,
          and health.
        </p>
      </section>

      {/* Why Choose Us */}

      <section className="bg-zinc-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14">
            Why Choose NexNews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-5">
                <h3 className="text-lg sm:text-xl font-bold text-center">
                  Simplicity & Ease Of Use
                </h3>
              </div>

              <ul className="p-6 space-y-4 text-gray-700">
                <li>✓ Fast News Access</li>
                <li>✓ Real-time Updates</li>
                <li>✓ Mobile Friendly</li>
                <li>✓ Easy Navigation</li>
              </ul>
            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-5">
                <h3 className="text-lg sm:text-xl font-bold text-center">
                  Reach The Right Audience
                </h3>
              </div>

              <ul className="p-6 space-y-4 text-gray-700">
                <li>✓ Technology News</li>
                <li>✓ Sports Coverage</li>
                <li>✓ Politics Updates</li>
                <li>✓ Business Insights</li>
                <li>✓ Entertainment News</li>
              </ul>
            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-5">
                <h3 className="text-lg sm:text-xl font-bold text-center">
                  Trusted Journalism
                </h3>
              </div>

              <ul className="p-6 space-y-4 text-gray-700">
                <li>✓ Verified Sources</li>
                <li>✓ Fact Checking</li>
                <li>✓ Editorial Support</li>
                <li>✓ Reliable Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8">
              To provide accurate, reliable, and timely news
              while maintaining the highest standards of
              journalistic integrity.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8">
              To become one of the most trusted and influential
              digital news platforms globally by empowering
              readers through information.
            </p>
          </div>
        </div>
      </section>

      {/* Careers */}

      <section className="bg-zinc-950 py-12 sm:py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-5">
            Careers At NexNews
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-14">
            Join our growing team of journalists, developers,
            editors and content creators shaping the future
            of digital journalism.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-black border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Frontend Developer
              </h3>

              <p className="text-gray-400 mb-5">
                React • Tailwind • Responsive Design
              </p>

              <button className="w-full sm:w-auto bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-black border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                News Editor
              </h3>

              <p className="text-gray-400 mb-5">
                Editorial Review • Content Management
              </p>

              <button className="w-full sm:w-auto bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-black border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Reporter
              </h3>

              <p className="text-gray-400 mb-5">
                Field Reporting • Investigative Journalism
              </p>

              <button className="w-full sm:w-auto bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-12 sm:py-16 lg:py-20 text-center bg-white px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
          Stay Informed With NexNews
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore the latest stories, breaking headlines,
          and in-depth coverage from around the world.
        </p>

        <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
          Explore News
        </button>
      </section>

      <Footer />
    </>
  );
}

export default About;