import Peace from "./components/Peace";
import SubSection from "./components/SubSection";
import LastSec from "./components/LastSec";
import Services from "./components/Services";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#D7A6B6] to-[#E6C7C7] text-gray-800 rounded-b-3xl shadow-lg">
        <Hero />
      </section>

      {/* SubSection */}
      <section className="w-full py-16 bg-white rounded-lg shadow-md mx-auto max-w-7xl">
        <SubSection />
      </section>

      {/* Peace Section */}
      <section className="w-full py-16 bg-gradient-to-r from-[#F8D0C5] to-[#F5B7B1] text-gray-700 rounded-lg shadow-md mx-auto max-w-7xl">
        <Peace />
      </section>

      {/* Last Section */}
      <section className="w-full py-16 bg-gradient-to-l from-[#F4E1D2] to-[#F2C9D4] text-gray-800 rounded-lg shadow-md mx-auto max-w-7xl">
        <LastSec />
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-white rounded-lg shadow-md mx-auto max-w-7xl">
        <Services />
      </section>
    </div>
  );
}
