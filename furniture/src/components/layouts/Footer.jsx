import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navIcons } from "../navLinks";

function Footer() {
  return (
    <div className="container">
      <div className="pt-0 md:pt-8 py-8 flex flex-wrap justify-center md:justify-between gap-5">
        <div className="flex items-center md:items-start gap-4 md:gap-5 flex-col md:flex-1 w-full my-3 md:m-0">
          <ul className="flex flex-wrap items-center justify-center gap-5">
            <li className="inline-flex">
              <Link
                href="#"
                className="hover:underline text-base font-normal text-gray-500 capitalize"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="inline-flex">
              <Link
                href="#"
                className="hover:underline text-base font-normal text-gray-500 capitalize"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Image src="/payment.png" alt="logo" width={280} height={18}></Image>
        </div>
        <div className="relative md:flex-1 text-center w-full -order-1 md:-order-none">
          <Link
            href="#"
            className="text-black text-center text-3xl capitalize font-medium leading-normal"
          >
            logo
          </Link>
        </div>
        <div className="relative md:flex-1 w-full">
          <div className="flex items-center md:items-end flex-col gap-3 sm:gap-5">
            <h3 className="text-base font-normal text-gray-500 capitalize">
              Follow Us
            </h3>
            <ul className="flex items-center gap-4">
              {navIcons.map(({ id, href, icon }) => (
                <Link
                  key={id}
                  href={href}
                  className="p-2 rounded-full border hover:bg-slate-200   ease-linear duration-150"
                >
                  {icon}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-normal text-gray-500 p-4 border-t border-gray-200">
        <p>Copyright © 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
