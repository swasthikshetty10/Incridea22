const Member = ({ name, role, src }) => {
  return (
    <>
      <div className="max-w-sm text-center w-[50%] lg:w-[25%]">
        <div className="bg-gray-200 pt-6">
          <img className="h-40 m-auto " src={src} alt="" />
        </div>
        <div className="text-center p-3 leading-10">
          <h1 className="pt-2 font-semibold text-xl text-black/70">{name}</h1>
          <h3 className="text-slate-400 font-semibold tracking-wider">
            {role}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Member;
