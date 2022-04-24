import React from "react";

function First({ participant }) {
  return (
    <div className="p-2 border-l-4 border-purple-400 border-t-2 rounded-lg">
      <h1 className="text-2xl text-red-500 font-semibold">
        {participant.name}
      </h1>
      <h2 className="mb-3 text-gray-300">{participant.email}</h2>
      <div className="border-2 px-2 border-cyan-900 font-semibold text-cyan-200 rounded-md text-center inline">
        PID: {participant.pId}
      </div>
    </div>
  );
}

export default First;
