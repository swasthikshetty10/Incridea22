import React, { useState } from "react";
import QRCode from "qrcode";
import { useEffect } from "react";

function Third() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL("pid").then((data) => {
      setSrc(data);
    });
  });

  return (
    <div className="text-center shadow-2xl p-2 mt-4 rounded-lg flex justify-center items-center bg-white w-fit mx-auto">
      <div className="p-2">
        <h1 className="text-gray font-semibold text-2xl">PID</h1>
        <h2 className="text-gray-900 text-xl">18041</h2>
      </div>
      <div id="container" className="">
        <img src={src} alt="QR code" />
      </div>
    </div>
  );
}

export default Third;
