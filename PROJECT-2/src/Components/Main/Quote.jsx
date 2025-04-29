import React from "react";

const quote = () => {
  return (
    <>
    <div className="h-[100vh] flex items-center justify-center ">
    <div className="w-[70%] relative ">
        <img src="../../../vsCode.png" className="w-24 h-24  absolute -top-12 -left-24 " alt="VS Code" />
        <img src="../../../html.png" className="w-36 h-36  absolute -top-32 right-0"alt="HTML" />
        <img src="../../../js.png" className="w-36 h-36  absolute -bottom-44 left-20" alt="CSS" />
        <img src="../../../css.png" className="w-32 h-32  absolute -bottom-40 right-20"alt="Javascript" />
        <h3 className="font-bold text-6xl tracking-tighter text-center ">[ I design & build experiences ]</h3>
        <p className="  text-2xl text-center tracking-tighter mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          laudantium a itaque explicabo ullam et excepturi distinctio modi animi
          magnam, aspernatur neque laboriosam quasi ipsa accusantium harum
          voluptatum illo error.
        </p>
      </div>
    </div>
    </>
  );
};

export default quote;
