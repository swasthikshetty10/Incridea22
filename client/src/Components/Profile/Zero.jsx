import { BiArrowBack } from "react-icons/bi";

const Zero = () => {
  return (
    <>
      <div className="w-4/5 text-white flex items-center">
        <div>
          <BiArrowBack size="2rem" className="text-sky-400" />
          <h1>Home</h1>
        </div>
        <h1 className="w-full mx-auto text-center text-gradient font-bold text-3xl bg-gradient-to-r from-indigo-100 via-purple-500 to-indigo-700">
          Welcome, Thanmay!
        </h1>
      </div>
    </>
  );
};

export default Zero;
