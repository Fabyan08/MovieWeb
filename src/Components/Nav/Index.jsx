const Nav = () => {
  return (
    <>
      <header className="px-5 md:px-10 py-2  mx-auto shadow-lg">
        <nav className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
          className="w-20 "
          />
          <div className="flex items-center mx-auto">
            <input
              type="text"
              className="pl-2 md:pr-28 border border-slate-500 font-semibold py-2 rounded-sm"
              placeholder="Search Movie"
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
