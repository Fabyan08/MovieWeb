const Category = () => {
  return (
    <>
      <div className="pl-2 md:pl-16">
        <h1 className="font-bold text-2xl  text-slate-400 mt-4">
          Browse Category
        </h1>
        <div className="mt-4">
          <ul className="flex flex-wrap gap-4">
            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">All</a>
            </li>
            <li
              id="active"
              className="text-slate-400 text-xl  active:bg-secondary font-semibold hover:text-white hover:bg-secondary p-2 rounded-full"
            >
              <a href="">Anime</a>
            </li>
            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">Action</a>
            </li>
            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">Adventure</a>
            </li>
            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">Science</a>
            </li>

            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">Fiction</a>
            </li>
            <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
              <a href="">Comedy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
