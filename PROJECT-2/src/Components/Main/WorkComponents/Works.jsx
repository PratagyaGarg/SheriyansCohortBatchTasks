import React from "react";
export default function Works() {
  return (
    <>
      <div className="mt-28">
        <div>
          <h3 className="text-5xl">Britannia</h3>
          <div className="flex justify-start items-center">
            <h3 className="text-2xl">2017</h3>
            <img className="w-28" src="../../../arrow.png" alt="" />
            <h3 className="text-xl">Mumbai</h3>
          </div>
        </div>
        <div className="h-130">
          <img
            className="w-full h-full object-cover"
            src="../../../Biscuits.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-start items-start mt-20">
        <div className="w-1/3">
          <div>
            <h3 className="text-6xl">India Gate</h3>
            <div className="flex justify-start items-center">
              <h3 className="text-3xl">2022</h3>
              <img className="w-36" src="../../../arrow.png" alt="" />
              <h3 className="text-2xl">New Delhi</h3>
            </div>
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="../../../IndiaGate.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-2/3 mt-24  overflow-hidden">
          <div>
            <h3 className="text-6xl">Japan</h3>
            <div className="flex justify-start items-center">
              <h3 className="text-3xl">2024</h3>
              <img className="w-36" src="../../../arrow.png" alt="" />
              <h3 className="text-2xl">Fushima inari </h3>
            </div>
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover object-bottom"
              src="../../../BurjKhalifa.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
