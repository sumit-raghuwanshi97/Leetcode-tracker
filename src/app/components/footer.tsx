export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} <span className="font-semibold">LeetCode Tracker</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Developed with <span className="text-red-500">❤️</span> by <span className="font-medium text-white">Sumit Raghuwanshi</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  