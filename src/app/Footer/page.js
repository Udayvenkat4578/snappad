export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold">SnappAd</h2>
        <p className="text-gray-400 text-sm mt-1">
           Your Brand on the Big Screen
        </p>
        <div className="border-t border-gray-700 mt-4 pt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} SnappAd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}