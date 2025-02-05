"use client";
import React from "react";
import { navLinks, navIcons } from "../navLinks";
import Link from "next/link";
import { downArrow } from "../icons/Icons";
import { useState } from "react";

function Header() {
  const [activePopup, setIsActivePopup] = useState(null);
  const renderSubMenu = (subMenu) =>
    subMenu?.map((item) => (
      <li key={item.id} className="relative">
        <Link href={item.href} className="text-[10px] font-normal inline-block">
          <img src={item.img} alt={item.label} className="" />
          <h3 className="text-sm text-black font-medium text-center uppercase my-3 tracking-widest">
            {item.label}
          </h3>
        </Link>
      </li>
    ));

  const renderMegaMenu = (megaMenu) =>
    megaMenu?.map((megaMenuItem) => (
      <li key={megaMenuItem.id}>
        <h3 className="text-base font-medium capitalize mb-2 pb-2 border-b border-gray-200 ">
          {megaMenuItem.label}
        </h3>
        <ul>
          {megaMenuItem.subMenu.map((subMenuItem) => (
            <li key={subMenuItem.id}>
              <Link
                href={subMenuItem.href}
                className="text-sm font-normal inline-block py-2 text-gray-500 hover:text-black ease-linear duration-150"
              >
                {subMenuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    ));

  return (
    <header className="container_large">
      <div className="flex justify-between items-center gap-3 min-h-16">
        <div className="text-black text-center text-2xl sm:text-3xl capitalize font-medium leading-normal">
          logo
        </div>
        <nav className="hidden lg:flex xl:ml-20 ml-10 mr-auto items-center gap-6 md:gap-10 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.id} className="group list-none">
              <Link
                href={link.href}
                className="flex items-center uppercase text-[12px] font-medium lg:py-8"
              >
                {link.label}
                {downArrow}
              </Link>
              <div className="absolute top-32 z-10 w-2/4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto duration-300 ease-in-out overflow-hidden">
                {link.subMenu && (
                  <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 bg-white p-5 pb-0">
                    {renderSubMenu(link.subMenu)}
                  </ul>
                )}
                {link.megaMenu && (
                  <ul className="bg-white p-5 flex flex-wrap justify-between gap-5">
                    {renderMegaMenu(link.megaMenu)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {navIcons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.href}
              onClick={(e) => {
                e.preventDefault();
                setIsActivePopup(activePopup === icon.id ? null : icon.id);
              }}
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
      {activePopup && (
        <div className="mt-2 z-10 absolute right-2 w-full bg-white shadow-lg rounded-lg max-w-96">
          {activePopup === "search" && (
            <div className="rounded-lg shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="pr-7 w-full text-sm p-2 min-h-[44px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-600 hover:text-gray-900 text-lg"
                onClick={() => setIsActivePopup(null)}
              >
                ✖
              </button>
            </div>
          )}

          {activePopup === "login" && (
            <div className="">
              <form action="" className="relative flex flex-wrap gap-4 p-8">
                <h2 className="text-2xl font-semibold uppercase w-full text-center ">
                  Login
                </h2>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  required
                  className="p-2 min-h-[44px] border w-full text-sm"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  required
                  className="p-2 min-h-[44px] border w-full text-sm "
                />
                <button
                  onClick={() => setIsActivePopup()}
                  type="submit"
                  className="bg-orange-600 p-2 min-h-11 uppercase text-white min-w-32 ml-auto hover:bg-orange-500 ease-linear duration-150"
                >
                  Submit
                </button>
                <div
                  className="absolute cursor-pointer bg-orange-500 text-white rounded-full w-8 h-8 flex justify-center items-center -top-2 -right-2  text-lg"
                  onClick={() => setIsActivePopup(null)}
                >
                  ✖
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
