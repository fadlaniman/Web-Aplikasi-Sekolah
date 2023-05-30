import { data } from "autoprefixer";
import React from "react";

const dataRuang = [
  {
    id: 1,
    img: "/static/images/image.jpg",
    ruang: "Ruang Kelas",
    nama: "MIPA 1",
  },
  {
    id: 2,
    img: "/static/images/image.jpg",
    ruang: "Ruang Kelas",
    nama: "MIPA 1",
  },
  {
    id: 3,
    img: "/static/images/image.jpg",
    ruang: "Ruang Kelas",
    nama: "MIPA 1",
  },
];

const Ruang = () => {
  return (
    <div className="grid py-12 px-7 bg-slate-50">
      <div className="xl:mx-auto xl:text-center py-5">
        <h1 className="uppercase font-bold text-green-800 text-xl">
          Daftar Ruang
        </h1>
        <p className="italic font-medium">
          Daftar Ruang <span className="text-green-800">Sma Uisu</span>
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 xl:px-20">
        {dataRuang.map((data) => (
          <div className="shadow-lg " key={data.id}>
            <div>
              <img src={data.img} alt="" />
            </div>
            <div className="p-3 bg-white">
              <h1 className="uppercase text-center font-bold">{data.ruang} <span className="text-green-800">{data.nama}</span> 
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ruang;
