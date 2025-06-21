import React from "react";

const Navbar = ({ category, setCategory, searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h2 className="text-xl font-bold text-gray-800">E-Commerce</h2>
      
      <input
        type="text"
        placeholder={`Search in ${category}...`}
        className="border border-gray-400 bg-gray-100 text-gray-900 placeholder-gray-500 p-2 rounded w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex gap-4">
        <button onClick={() => setCategory("Mobiles")} className="hover:underline">
          Mobiles
        </button>
        <button onClick={() => setCategory("Laptops")} className="hover:underline">
          Laptops
        </button>
        <button onClick={() => setCategory("watch")} className="hover:underline">
          Watchs
        </button>
      </div>
    </div>
  );
};

export default Navbar;