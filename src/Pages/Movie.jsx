import Banner from "../Components/Banner/Index";
import Category from "../Components/Category/Index";
import Nav from "../Components/Nav/Index";
import Pagination from "../Components/Pagination/Index";
const Movie = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Category />
      {/* <API /> */}
      <Pagination />
      <div className="mt-96"></div>
    </>
  );
};

export default Movie;
