import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      {/* Social Media Section */}

      <section className="bg-zinc-900 border-t border-zinc-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <h2 className="text-sm sm:text-base lg:text-lg font-medium text-gray-300 uppercase tracking-wide text-center">
              Follow Us On Social Media
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}

      <footer className="bg-black text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Company */}

            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                NexNews
              </h3>

              <ul className="space-y-2">
                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  About Us
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Contact Us
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Careers
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Advertise
                </li>
              </ul>
            </div>

            {/* Categories */}

            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                Categories
              </h3>

              <ul className="space-y-2">
                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Technology
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Sports
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Politics
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Business
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Health
                </li>
              </ul>
            </div>

            {/* Services */}

            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                Services
              </h3>

              <ul className="space-y-2">
                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Latest News
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Breaking News
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  Editorials
                </li>

                <li className="text-sm hover:text-red-500 cursor-pointer transition">
                  RSS Feed
                </li>
              </ul>
            </div>

            {/* About */}

            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                About NexNews
              </h3>

              <p className="text-sm leading-6 text-gray-400 mb-4">
                NexNews delivers breaking news, technology updates,
                politics, sports, business and entertainment stories
                from trusted sources around the world.
              </p>

              <div className="space-y-2">
                <p className="text-sm">
                  Calicut, Kerala, India
                </p>

                <p className="text-sm">
                  +91 9876543210
                </p>

                <p className="text-sm break-all">
                  support@nexnews.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="bg-zinc-950 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500 text-center">
              © 2026 NexNews. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              <span className="text-xs hover:text-red-500 cursor-pointer transition">
                Privacy Policy
              </span>

              <span className="text-xs hover:text-red-500 cursor-pointer transition">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;