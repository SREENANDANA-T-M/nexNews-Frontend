import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200">
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaPhoneAlt className="text-red-600 text-3xl mx-auto mb-4" />

            <h3 className="font-bold text-lg sm:text-xl mb-2">
              Phone
            </h3>

            <p className="text-gray-600 wrap-break-word">
              +91 9876543210
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaEnvelope className="text-red-600 text-3xl mx-auto mb-4" />

            <h3 className="font-bold text-lg sm:text-xl mb-2">
              Email
            </h3>

            <p className="text-gray-600 break-all">
              support@nexnews.com
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaMapMarkerAlt className="text-red-600 text-3xl mx-auto mb-4" />

            <h3 className="font-bold text-lg sm:text-xl mb-2">
              Address
            </h3>

            <p className="text-gray-600">
              Calicut, Kerala, India
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="bg-zinc-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Send Us A Message
          </h2>

          <form className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:border-red-500"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:border-red-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
            Find Us
          </h2>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="NexNews Location"
              src="https://www.google.com/maps?q=Calicut,Kerala,India&output=embed"
              width="100%"
              height="300"
              className="sm:h-100 lg:h-112.5"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;