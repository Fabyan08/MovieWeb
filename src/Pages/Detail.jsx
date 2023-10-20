import Banner from "../Components/Banner/Index";
import Category from "../Components/Category/Index";
import Nav from "../Components/Nav/Index";
import Pagination from "../Components/Pagination/Index";
import Footer from "../Components/Footer/Index";
const Detail = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        {/* <div className="bg-black/30 md:bg-black/30 w-full absolute h-36 md:h-[560px]" /> */}
        <div className="absolute pl-4 md:pl-10 mt-10 md:mt-20 z-10">
          <h1 className="text-white text-4xl font-bold md:text-6xl">SAINT SEIYA</h1>
          <div className="flex space-x-40">
            <div className="w-5 md:w-10 flex">
              <img src="/assets/icon/Star 1.png" alt="" />
              <img src="/assets/icon/Star 1.png" alt="" />
              <img src="/assets/icon/Star 1.png" alt="" />
              <img src="/assets/icon/Star 1.png" alt="" />
              <img src="/assets/icon/Star 5.png" alt="" />
            </div>
            <div>
              <h1 className="text-white  text-lg font-semibold">
                2200 Reviews
              </h1>
            </div>
          </div>
          <div className="w-fit ">
            <h1 className="text-white font-semibold md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quam quidem voluptates veritatis fuga consectetur sequi velit quo
              praesentium modi?
            </h1>
          </div>
          <div className="md:flex mt-2 space-y-3 md:space-y-0 md:space-x-5">
            <div>
              <button className="bg-primary md:py-3 p-3 md:px-10 text-white rounded-lg font-bold text-2xl">
                Watch Trailer
              </button>
            </div>
            <div>
              <button className="border-2 border-white py-3 px-10 text-white rounded-lg font-bold text-2xl">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
        <div className="brightness-50 ">
          <img
            src="/assets/images/banner.png"
            className="bg-cover h-96 w-full"
            alt=""
          />
        </div>
        <div className="flex md:pl-16 text-xl mt-5">
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Overview
          </a>
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Characters
          </a>
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Review
          </a>
        </div>
        <div className="flex  pl-3 md:pl-16 items-center justify-center">
          <h1 className="font-bold text-4xl shadow-sm">Synopsis</h1>
          <hr className="border border-slate-500 w-full ml-12 mr-16 my-4" />
        </div>
        <div className=" pl-3 md:pl-16 text-2xl w-fit    mt-2">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed
            alias error debitis, ea tempore nulla, officiis mollitia nam non
            placeat. Dolores ex quis, fugiat molestiae nulla non rerum quidem ab
            obcaecati, provident sequi minus, cumque odit quam hic dolorem?
          </h1>
        </div>
        <div className="flex  pl-3 md:pl-16 items-center justify-center">
          <h1 className="font-bold text-4xl shadow-sm">Movie Info</h1>
          <hr className="border border-slate-500 w-[1185px] ml-5 mr-16 my-4" />
        </div>
        <div className=" pl-3 md:pl-16 text-2xl w-[1400px] mt-10">
          <ul>
            <li>
              <b>Release Date :</b> January 5, 1988
            </li>
            <li>
              <b>Director :</b> John Doe
            </li>
            <li>
              <b>Featured song :</b> January 5, 1988
            </li>
            <li>
              <b>Budget :</b> January 5, 1988
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
