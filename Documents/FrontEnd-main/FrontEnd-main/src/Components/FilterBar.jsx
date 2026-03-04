const FilterBar = ({ onSearch, placeholder }) => (
    <div className="relative">
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="absolute left-4 top-4 text-gray-400">🔍</span>
    </div>
  );
  
  export default FilterBar;