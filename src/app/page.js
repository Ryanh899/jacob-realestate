import Head from 'next/head';
import HeroSlideshow from './hero';


export default function Home() {
  return (
    <>
      <main className="text-gray-800 bg-[#f9f7f4]" >
        {/* Hero Section */}
        <HeroSlideshow />
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
          <a href="#successes" className="hover:text-black text-gray-600 f2">Recent Sales</a>
          <a href="#listings" className="hover:text-black text-gray-600 f2">Listings</a>
          <a href="#contact" className="hover:text-black text-gray-600 f2">Contact</a>
          <a href="#about" className="hover:text-black text-gray-600 f2">About</a>
        </nav>

        {/* About Section */}
        <section className="py-24 px-4 text-center bg-white" id="about">
          <h2 className="text-3xl font-semibold mb-4 f1">Meet Jacob Hazzard</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 f2">
            With years of experience in high-end real estate and a sharp eye for profitable renovations, Jacob delivers tailored service and stunning results. From strategic upgrades to record-breaking sales, his client-first approach ensures luxury with impact.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-[#f0eeea] text-center px-4">
          <h2 className="text-xl font-light tracking-widest uppercase mb-6 f1">A Modern Real Estate Philosophy</h2>
          <p className="max-w-xl mx-auto text-lg f2">
            Jacob's approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
          </p>
        </section>

        {/* Past Successes */}
        <section className="py-20 bg-white px-4" id="successes">
          <h2 className="text-3xl font-semibold text-center mb-10 f1">Past Listings & Renovation Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <img src="https://via.placeholder.com/400x250" alt="Past Work" className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">$120K Over Asking</h3>
                <p className="text-sm text-gray-600 f2">Modernized kitchen and exterior staging created maximum appeal.</p>
              </div>
            </div>
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <img src="https://via.placeholder.com/400x250" alt="Past Work" className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">Sold in 48 Hours</h3>
                <p className="text-sm text-gray-600 f2">Luxury townhome fully reimagined with buyer appeal in mind.</p>
              </div>
            </div>
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <img src="https://via.placeholder.com/400x250" alt="Past Work" className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">Record Neighborhood Sale</h3>
                <p className="text-sm text-gray-600 f2">Pre-sale renovations drove ROI and buyer competition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Listings */}
        <section className="py-20 bg-[#f0eeea] px-4" id="listings">
          <h2 className="text-3xl font-semibold text-center mb-10 f1">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x250" alt="Listing" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">123 Ocean View Blvd</h3>
                <p className="text-sm text-gray-600 mb-2 f2">4 Bed • 3 Bath • $2.4M</p>
                <a href="#" className="text-blue-600 font-medium">View Details →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x250" alt="Listing" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold f2">456 Hillside Drive</h3>
                <p className="text-sm text-gray-600 mb-2 f2">5 Bed • 4 Bath • $3.1M</p>
                <a href="#" className="text-blue-600 font-medium f2">View Details →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x250" alt="Listing" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold f2">789 Coastal Road</h3>
                <p className="text-sm text-gray-600 mb-2 f2">3 Bed • 2 Bath • $1.9M</p>
                <a href="#" className="text-blue-600 font-medium f2">View Details →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4 f1">Let’s Connect</h2>
          <p className="mb-6 text-lg text-gray-600 f2">Thinking of buying, selling, or renovating? Reach out to Jacob directly.</p>
          <a href="mailto:jacob@example.com" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">Contact Jacob</a>
        </section>

        {/* Footer */}
        <footer className="bg-[#f0eeea] text-center py-6 text-sm text-gray-600 f2">
          <p>&copy; {new Date().getFullYear()} Jacob Hazzard Real Estate. CA DRE #01234567</p>
        </footer>
      </main>
    </>
  );
}
