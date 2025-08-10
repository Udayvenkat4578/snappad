import { FaFilm, FaStore, FaMapMarkerAlt } from "react-icons/fa";

export default function HowSnappWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500">
          How SnappAd Works
        </h2>
        <p className="text-center text-gray-500 mt-2 text-lg">
          Simple, effective cinema advertising for local businesses
        </p>

        {/* Cards Container */}
        <div className="mt-10 grid gap-8 md:grid-cols-3 px-3">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-gray-200">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-50">
              <FaFilm className="text-orange-500 text-2xl" />
            </div>
            <h3 className="mt-4 font-semibold text-lg flex items-center justify-center gap-2 text-gray-700">
              🎬 Interval Advertising
            </h3>
            <p className="text-gray-600 mt-2">
              Showtime for your brand — your ad plays during the break when
              everyone’s watching.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-gray-200">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-50">
              <FaStore className="text-blue-500 text-2xl" />
            </div>
            <h3 className="mt-4 font-semibold text-lg flex items-center justify-center gap-2 text-gray-700">
              🏪 Local Business Focus
            </h3>
            <p className="text-gray-600 mt-2">
              From cafes to car washes — we put your business on the big screen
              in your community.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-gray-200">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-50">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            </div>
            <h3 className="mt-4 font-semibold text-lg flex items-center justify-center gap-2 text-gray-700">
              📍 Hyperlocal Targeting
            </h3>
            <p className="text-gray-600 mt-2">
              Pinpoint your audience by location and language — from Telugu
              blockbusters to English hits.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
