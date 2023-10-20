import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Pagination = () => {
  return (
    <>
      <div>
        <ul className="flex items-center justify-center gap-12 text-4xl">
          <li>
            <a href="">
              <AiOutlineLeft />
            </a>
          </li>
          <li className="hover:font-bold hover:bg-primary hover:text-white p-3">
            <a href="">1</a>
          </li>
          <li className="hover:font-bold hover:bg-primary hover:text-white p-3">
            <a href="">2</a>
          </li>
          <li className="hover:font-bold hover:bg-primary hover:text-white p-3">
            <a href="">3</a>
          </li>
          <li className="hover:font-bold hover:bg-primary hover:text-white p-3">
            <a href="">4</a>
          </li>
          <li className="hover:font-bold hover:bg-primary hover:text-white p-3">
            <a href="">5</a>
          </li>
          <li>
            <a href="">
              <AiOutlineRight />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
