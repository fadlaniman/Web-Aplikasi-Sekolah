import React from "react";

const dataPerpustakaan = [
  {
    id: 1,
    img: "/public/static/images/image.jpg",
    nama: "Perpustakaan",
  },
  {
    id: 2,
    img: "/public/static/images/image.jpg",
    nama: "Perpustakaan",
  },
  {
    id: 3,
    img: "/public/static/images/image.jpg",
    nama: "Perpustakaan",
  },
];

const Perpustakaan = () => {
  return (
    <div className="grid py-12 px-7 bg-slate-50">
      <div className="xl:mx-auto xl:text-center py-5">
        <h1 className="uppercase font-bold text-green-800 text-xl">
          Perpustakaan
        </h1>
        <p className="italic font-medium">
          Perpustakaan <span className="text-green-800">Sma Uisu</span>
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 xl:px-20">
        {dataPerpustakaan.map((data) => (
          <div className="shadow-lg " key={data.div}>
            <div>
              <img src={data.img} alt="" />
            </div>
            <div className="p-3">
              <h1 className="uppercase text-center font-bold">
                {data.nama} <span className="text-green-800"></span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Perpustakaan;
