import React from "react";
export default function MainDetails() {
  return (
    <>
      <div className="flex items-end justify-between my-10">
        <div>
          <h3 className="text-xl  font-bold">Hello I am ,</h3>
          <h3 className="text-[11rem] leading-none tracking-tighter font-bold">Pratagya.</h3>
        </div>
        <div className="flex gap-3 items-center">
            <h3>[6:14]</h3>
            <div className="w-32 h-[1px] bg-black opacity-40"></div>
            <h3>Creative Front End Developer</h3>
        </div>
      </div>
    </>
  );
}
