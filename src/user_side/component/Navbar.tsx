// // import React, { useState } from "react";
// // import ThemeToggle from "../../ThemeToggle";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { Link } from "react-router-dom";

// // const Navbar: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16 items-center">
// //           {/* Left: Logo */}
// //           <div className="flex items-center">
// //             <img
// //               src="/logoCrop.jpg"
// //               alt="M.Z"
// //               className="h-10 w-10 rounded-full mr-2"
// //             />
// //             <span className="font-bold text-lg text-gray-800 dark:text-white">
// //               M.Z
// //             </span>
// //           </div>

// //           {/* Center: Links (Desktop) */}
// //           <div className="hidden md:flex space-x-8">
// //             <Link
// //               to="/web"
// //               className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/web/about"
// //               className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //             >
// //               About
// //             </Link>
// //             <Link
// //               to="/web/contact"
// //               className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //             >
// //               Contact Us
// //             </Link>
// //           </div>

// //           {/* Right: Theme Toggle */}
// //           <div className="flex items-center space-x-4">
// //             <ThemeToggle />

// //             {/* Mobile menu button */}
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="md:hidden text-gray-700 dark:text-gray-200"
// //             >
// //               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
// //           <Link
// //             to="/web"
// //             className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //           >
// //             Home
// //           </Link>
// //           <Link
// //             to="/web/about"
// //             className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //           >
// //             About
// //           </Link>
// //           <Link
// //             to="/web/contact"
// //             className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
// //           >
// //             Contact Us
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;










// import React, { useState } from "react";
// import ThemeToggle from "../../ThemeToggle";
// import { FiMenu, FiX, FiUser, FiShoppingCart, FiSearch, FiMoreVertical } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const location = useLocation();

//   const links = [
//     { name: "Home", path: "/web" },
//     { name: "About", path: "/web/about" },
//     { name: "Contact Us", path: "/web/contact" },
//   ];

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">

//           {/* Left: Logo */}
//           <div className="flex items-center">
//             <img
//               src="/logoCrop.jpg"
//               alt="M.Z"
//               className="h-10 w-10 rounded-full mr-2"
//             />
//             <span className="font-extrabold text-xl text-gray-800 dark:text-white">
//               M.Z Luxury Fragrance
//             </span>
//           </div>

//           {/* Center: Links (Desktop) */}
//           <div className="hidden md:flex space-x-8">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`text-gray-700 dark:text-gray-200 hover:text-blue-500 relative ${
//                   location.pathname === link.path ? "font-semibold" : ""
//                 }`}
//               >
//                 {link.name}
//                 {location.pathname === link.path && (
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded" />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-4">
//             <ThemeToggle />
//             <FiSearch size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />

//             <div className="relative">
//               <FiUser
//                 size={22}
//                 className="cursor-pointer text-gray-700 dark:text-gray-200"
//                 onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//               />
//               {isUserMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             <FiShoppingCart size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
//             <FiMoreVertical size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden text-gray-700 dark:text-gray-200"
//             >
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="flex items-center space-x-4 mt-2">
//             <FiSearch size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
//             <FiUser size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
//             <FiShoppingCart size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
//             <FiMoreVertical size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import ThemeToggle from "../../ThemeToggle";
import { FiMenu, FiX, FiUser, FiShoppingCart, FiSearch, FiMoreVertical } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state: RootState) => state.cart) as any;

  const links = [
    { name: "Home", path: "/web" },
    { name: "About", path: "/web/about" },
    { name: "Contact Us", path: "/web/contact" },
  ];

  const renderLinks = (isMobile = false) =>
    links.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        className={`block ${isMobile ? "py-2" : "relative"} text-gray-700 dark:text-gray-200 hover:text-blue-500 ${
          location.pathname === link.path && !isMobile ? "font-semibold" : ""
        }`}
      >
        {link.name}
        {!isMobile && location.pathname === link.path && (
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded" />
        )}
      </Link>
    ));

  const handleCartClick = () => {
    navigate("/web/cart");
  };

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
            <span className="font-extrabold text-xl text-gray-800 dark:text-white">
              M.Z Luxury Fragrance
            </span>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex space-x-8">{renderLinks()}</div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <FiSearch size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />

            <div className="relative">
              <FiUser
                size={22}
                className="cursor-pointer text-gray-700 dark:text-gray-200"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Logout
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <FiShoppingCart 
                size={22} 
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" 
                onClick={handleCartClick}
              />
              {cartItems && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <FiMoreVertical size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />

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
          {renderLinks(true)}
          <div className="flex items-center space-x-4 mt-2">
            <FiSearch size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
            <FiUser size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
            <div className="relative">
              <FiShoppingCart 
                size={22} 
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" 
                onClick={handleCartClick}
              />
              {cartItems && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <FiMoreVertical size={22} className="cursor-pointer text-gray-700 dark:text-gray-200" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
