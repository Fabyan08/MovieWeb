import { useState } from "react";

const Nav = ({ onSearch, onSearchSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
    onSearchSubmit();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <header className="px-5 md:px-10 py-2 mx-auto shadow-lg">
        <nav className="flex items-center">
          <a href="/">
            <img src="/assets/images/logo.png" alt="logo" className="w-20" />
          </a>
          <div className="flex items-center mx-auto">
            <input
              type="text"
              className="pl-2 md:pr-28 border border-slate-500 font-semibold py-2 rounded-sm"
              placeholder="Search Movie"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress} 
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
