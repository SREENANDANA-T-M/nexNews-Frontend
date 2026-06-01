import { useState } from "react";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import CategorySection from "../Components/CategorySection";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import RecentNewsSlider from "../Components/RecentNewsSlider";

function Home() {
  const [sidebarStatus, setSidebarStatus] =
    useState(false);

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      {/* Navbar */}

      <Navbar
        setSidebarStatus={setSidebarStatus}
      />

      {/* Search Sidebar */}

      <Sidebar
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
      />

      {/* Hero Section */}

      <HeroSection />

      {/* Latest News Slider */}

      <RecentNewsSlider />

      {/* News Categories */}

      <CategorySection />

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default Home;