import React, { useState } from "react";
import ThemeToggle from "../../ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/logoCrop.jpg"
              alt="M.Z"
              className="h-10 w-10 rounded-full mr-2"
            />
            <span className="font-bold text-lg text-gray-800 dark:text-white">
              M.Z
            </span>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/web"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/web/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/web/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          <Link
            to="/web"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/web/about"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/web/contact"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
