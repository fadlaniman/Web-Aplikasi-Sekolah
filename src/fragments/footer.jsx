import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 pt-10 bg-white">
      <div className="space-y-5">
        <h5 className="xl:text-2xl text-xl font-semibold text-center">Tentang kami</h5>
        <ul className="gap-3 justify-center space-y-5">
          <li className="text-center">
            <img
              className="w-20 mx-auto"
              src="/public/static/images/example.png"
              alt=""
            />
          </li>
          <li className="w-max m-auto">
            <p className="uppercase font-teko">sma swasta islam proyek uisu</p>
          </li>
        </ul>
      </div>
      <div className="pt-10 pb-5">
        <h5 className="text-xl font-semibold">Hubungi Kami</h5>
        <ul className="flex gap-10 pt-5 px-5 pb-2">
          <li className="my-auto">
            <Link>
              <BsInstagram className="text-xl" />
            </Link>
          </li>
          <li className="my-auto">
            <Link>
              <HiOutlineMail className="text-2xl" />
            </Link>
          </li>
        </ul>
        <p className="italic">
          Email : <Link>Examplegmail@uisu.co.id</Link>
        </p>
      </div>
      <div className="py-5">
        <p className="border-t border-gray-400 pt-10 text-sm italic text-center ">
          Created{" "}
          <span className="text-green-800 font-semibold uppercase">Alumni</span>{" "}
          |{" "}
          <span className="text-green-800 font-semibold uppercase">
            sma uisu .
          </span>{" "}
          2023-2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
