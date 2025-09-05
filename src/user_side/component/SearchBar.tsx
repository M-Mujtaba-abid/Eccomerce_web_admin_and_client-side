// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchBar: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       navigate(`/web/search?q=${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSearch} className="flex items-center gap-2">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search products..."
//           className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from "react";

interface SearchBarProps {
  closeSearch?: () => void; // 👈 make it optional if you want
}

const SearchBar: React.FC<SearchBarProps> = ({ closeSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // 🔹 if closeSearch exists, call it after submit
    if (closeSearch) closeSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;