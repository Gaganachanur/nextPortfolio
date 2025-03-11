import React, { Fragment } from "react";
import Byjus_logo from "../assets/Byjus-Logo-700x394.png";
import tecnotree_logo from '../assets/tecnotree-logo-png_seeklogo-499226.png'
import Image from "next/image";

export const Organization = () => {
  return (
    <Fragment>
      <h1 className=" font-Michroma text-3xl py-10  dark:text-white">
        Organizations
      </h1>
      <div className=" py-2 leading-8 text-gray-800  dark:text-gray-200 flex justify-start">
        <div>
        <h3 className="pb-4 m-5">
          {" "}
        Expreienced in working with
        </h3>
        <h3 className="pb-4 m-5">
          {" "}
          - start up unicorn like Byju's and MNC Tecnotree Corporation
        </h3>
        </div>
        <Image
                className="rounded-full shadow-2xl m-5"
                alt="Byjus_logo"
                width={250}
                height={5}
                objectFit="cover"
                src={Byjus_logo}
              />
                <Image
                className="rounded-full shadow-2xl m-5 "
                alt="tecnotree_logo"
                width={250}
                height={5}
                objectFit="cover"
                src={tecnotree_logo}
              />
      </div>
    </Fragment>
  );
};
