import Link from 'next/link';
import Image from 'next/image';



export default function Navbar() {

    return (
      <nav className="bg-gray-900 text-white">
        <div className="mx-2 flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-semibold hover:text-gray-300">
          <Image src="/leetcodetracker.png" alt="Logo" width={90} height={90} />
          <span className="text-xl font-bold">Leetcode Tracker</span>
          </Link>
          <div className="space-x-4 hidden md:flex mx-4">
            <Link href="/" className="hover:text-gray-300">
              Leaderboard
            </Link>
            <Link href="/settings" className="hover:text-gray-300">
              Settings
            </Link>
            <Link href="/presentation/login" className="hover:text-gray-300">
              Login
            </Link>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-white" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
