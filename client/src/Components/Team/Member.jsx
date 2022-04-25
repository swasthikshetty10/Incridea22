const Member = ({ name, role, src }) => {
  return (
    <>
      <div className="max-w-sm text-center w-[50%] lg:w-[25%] pt-2">
        <div className="bg-[#444444] pt-6 ">
          <img className="h-40 m-auto " src={src} alt="" />
        </div>
        <div className="text-center p-3">
          <h1 className="pt-2 font-semibold text-xl text-white">{name}</h1>
          <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
            {role}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Member;
