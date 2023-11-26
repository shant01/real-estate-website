const SearchBar = ({ onSearch }) => {
    return (
          <input
          className="w-full form-input  text-gray-700 shadow-lg rounded-lg border border-gray-300 p-3 mt-4 mb-12 focus:outline-none"
            type="text"
            placeholder="Search listings..."
            // className="form-input w-full max-w-xl text-gray-700 shadow-lg rounded-lg border border-gray-300 p-3"
            onChange={(e) => onSearch(e.target.value)}
          />
    );
  };
  
  export default SearchBar;