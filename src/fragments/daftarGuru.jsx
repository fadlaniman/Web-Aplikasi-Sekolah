import React from "react";

const dataGuru = [
  {
    id: 1,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg"
  },
  {
    id: 2,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 3,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 4,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 5,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 6,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 7,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 8,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 9,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
  {
    id: 10,
    nama: "Marison Hutagalung S,Pd",
    nip: 99999999,
    jabatan: `Guru & Bidang Kesiswaan`,
    foto: "/public/static/images/image.jpg" 
  },
];

const Guru = () => {
  return (
    <div className="grid py-12 px-7 bg-slate-50">
      <div className="xl:mx-auto xl:text-center py-7">
        <h1 className="uppercase font-bold text-green-800 text-xl">
          Daftar Guru
        </h1>
        <p className="italic font-medium text-black">
          Daftar Guru <span className="text-green-800">Sma Uisu</span>
        </p>
      </div>
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-20">
        {dataGuru.map((data) => (
          <div className="grid shadow-md rounded-lg bg-white" key={data.id}>
            <img
              className="rounded-full w-40 h-40 border-4 border-grey-500 mx-auto mt-10"
              src={data.foto}
              alt=""
            />
            <ul className="p-5 mx-auto font-light italic leading-7">
              <li className="text-lg font-bold text-black not-italic">
                <h1>{data.nama} </h1>
              </li>
              <li className="uppercase">Nip : {data.nip}</li>
              <li>Jabatan : {data.jabatan} </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guru;
