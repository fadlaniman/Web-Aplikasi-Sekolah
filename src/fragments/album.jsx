import React from "react";

const slideImages = [
  "/public/static/images/image.jpg",
  "/public/static/images/image.jng",
  "/public/static/images/image.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Album = () => {
  return (
    <>

      <div className="grid p-5 bg-slate-50">
        <div className="flex mx-auto overflow-hidden 2xl:w-1/3" style={properties}>
          <img className="rounded-md" src={slideImages[0]} alt="" />
          <img
            className=" rounded-md"
            src={slideImages[1]}
            alt=""
          />
          <img
            className=" rounded-md"
            src={slideImages[2]}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Album;
