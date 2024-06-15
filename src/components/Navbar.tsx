import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-[#34353A] text-black dark:text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <p className="text-2xl font-bold text-dark dark:text-white-400 ">Logo</p>
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex md:space-x-8">
          <Link href="/about">
            <p className="hover:text-gray-700 dark:hover:text-gray-300">About</p>
          </Link>
          <Link href="/portfolio">
            <p className="hover:text-gray-700 dark:hover:text-gray-300">Portfolio</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-700 dark:hover:text-gray-300">Contact</p>
          </Link>
        </div>

        {/* Search and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#34353A] dark:border-[gray-700] dark:placeholder-white"
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
