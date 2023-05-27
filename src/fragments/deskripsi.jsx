import { Link } from "react-router-dom";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import React from "react";

const Deskripsi = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-10 py-7 space-y-3 text-center">
        <h2 className="text-2xl font-caveat uppercase">sma uisu</h2>
        <p className="text-sm font-poppins">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          veniam quo excepturi ipsam fugit facere a voluptatum quas sapiente ut
          eum commodi adipisci iure placeat cumque iusto ullam cupiditate
          itaque...
        </p>
        <Icon/>
      </div>
    </div>
  );
};

const Icon = () => {
  return (
    <Link to="/deskripsi" className="flex bg-green-800 py-3 w-max text-white gap-2 rounded-sm px-5 mx-auto cursor-pointer hover:bg-green-700">
      <BsReverseListColumnsReverse />
      <p className="uppercase text-xs font-bold">selengkapnya</p>
    </Link>
  );
};

export default Deskripsi;
