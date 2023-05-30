import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createGlobalState } from "react-hooks-global-state";
import React from "react";

export const { useGlobalState, setGlobalState } = createGlobalState({
  type: false,
});

const Brand = () => {
  return (
    <div className="flex gap-3 my-auto">
      <img className="h-16" src="/static/images/example.png" alt="" />
      <p className="border-r-2 border-black h-10 my-auto"></p>
      <div className="w-1/2 text-sm font-bold">
        <h1 className="uppercase">
          sma swasta islam proyek uisu
        </h1>
        <p className="text-green-800 font-bold italic text-xs">Akreditas A</p>
      </div>
    </div>
  );
};

const Menu = () => {
  const [toggleNavigation] = useGlobalState("type");
  return (
    <>
      <button className={toggleNavigation ? "z-20 fixed py-5" : ""}>
        <HiMenu
          onClick={() => {
            setGlobalState("type", true);
          }}
          className={
            toggleNavigation ? "hidden" : "text-2xl cursor-pointer 2xl:hidden"
          }
        />
        <HiX
          onClick={() => {
            setGlobalState("type", false);
          }}
          className={
            toggleNavigation
              ? "text-2xl cursor-pointer 2xl:hidden z-30"
              : "hidden"
          }
        />
      </button>
    </>
  );
};

const Navigation = () => {
  const [toggleProfil, setToggleProfil] = useState(false);
  const [toggleFasilitas, setToggleFasilitas] = useState(false);
  const [toggleAkademik, setToggleAkademik] = useState(false);
  const [toggleNavigation] = useGlobalState("type");
  return (
    <ul
      className={
        toggleNavigation
          ? "2xl:flex 2xl:text-black grid text-left mb-auto gap-10 px-7 py-20 font-medium text-sm 2xl:gap-12 2xl:space-y-0 xl:p-7"
          : "2xl:flex 2xl:text-black grid text-center p-7  font-medium text-sm 2xl:gap-12 2xl:p-7"
      }
    >
      <Link
        to="/"
        className="transition p-3  bg-green-800 2xl:bg-transparent 2xl:text-black text-white 2xl:rounded-none rounded-full xl:pb-1 duration-200"
      >
        Beranda
      </Link>
      <li className="grid gap-3 transition xl:border-b-2 xl:border-white duration-200">
        <Link
          onClick={() => {
            setToggleProfil(!toggleProfil);
          }}
          className={
            toggleProfil
              ? "p-3 z-20 border-b-2 2xl:border-none border-green-800"
              : "p-3 z-20"
          }
        >
          Profil
        </Link>
        <ul
          className={
            toggleProfil
              ? "mx-5  p-3 bg-gray-200 grid space-y-5 text-gray-600 font-medium z-20"
              : "hidden"
          }
        >
          <li>
            <Link to="/profil/visi">Visi & Misi</Link>
          </li>
          <li>
            <Link to="/profil/daftarguru">Daftar Guru</Link>
          </li>
          <li>
            <Link to="/profil/staf">Staf</Link>
          </li>
        </ul>
      </li>
      <li className="grid gap-3 transition  duration-200">
        <Link
          onClick={() => {
            setToggleAkademik(!toggleAkademik);
          }}
          className={
            toggleAkademik
              ? "p-3 border-b-2 2xl:border-none border-green-800"
              : "p-3"
          }
        >
          Akademik
        </Link>
        <ul
          className={
            toggleAkademik
              ? "mx-5 2xl:p-0 p-3 border grid space-y-5 2xl:grid bg-gray-200 text-gray-600 font-medium"
              : "hidden"
          }
        >
          <li>
            <Link to="/akademik/kurikulum">Kurikulum</Link>
          </li>
          <li>
            <Link to="/akademik/akreditas">Akreditas</Link>
          </li>
        </ul>
      </li>
      <li className="grid gap-3 transition xl:border-b-2 xl:border-white duration-200">
        <Link
          onClick={() => {
            setToggleFasilitas(!toggleFasilitas);
          }}
          className={
            toggleFasilitas
              ? "p-3 2xl:p-0 border-b-2 2xl:border-none border-green-800"
              : "p-3"
          }
        >
          Fasilitas
        </Link>
        <ul
          className={
            toggleFasilitas
              ? "mx-5 p-3 border grid space-y-5 2xl:grid bg-gray-200 text-gray-600 font-mediumdium"
              : "hidden"
          }
        >
          <li>
            <Link to="/fasilitas/ruang">Ruang</Link>
          </li>
          <li>
            <Link to="/fasilitas/perpustakaan">Perpustakaan</Link>
          </li>
          <li>
            <Link to="/fasilitas/saranaolahraga">Sarana Olahraga</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

Brand.Menu = Menu;
Brand.Navigation = Navigation;
export default Brand;
