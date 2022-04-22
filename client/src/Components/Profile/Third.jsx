import React from "react";
import QRCode from "qrcode";

function Third() {
  //   QRCode.toCanvas(
  //     "text",
  //     { errorCorrectionLevel: "H" },
  //     function (err, canvas) {
  //       if (err) throw err;

  //       var container = document.getElementById("container");
  //       container.appendChild(canvas);
  //     }
  //   );

  return (
    <div className="p-2 mt-10 rounded-lg border-2 bg-white inline-block drop-shadow-3xl">
      <div className="flex">
        <div className="p-2">
          <h1 className="text-orange-700 font-bold">PID</h1>
          <h2 className="text-gray-900">18041</h2>
        </div>
        <div id="container" className="p-2">
          QR CODE
        </div>
      </div>
    </div>
  );
}

export default Third;
