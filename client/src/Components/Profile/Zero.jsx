import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Zero = () => {
  return (
    <>
      <div className="w-full sm:w-4/5 text-white flex items-center lg:p-2 p-4">
        <div>
          <Link to="/">
            <BiArrowBack size="2rem" className="text-sky-400" />
            <h1>Home</h1>
          </Link>
        </div>
        <h1 className="p-2 w-full mx-auto text-center text-gradient font-bold text-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">
          Welcome, Thanmay M Das!
        </h1>
      </div>
    </>
  );
};

export default Zero;
