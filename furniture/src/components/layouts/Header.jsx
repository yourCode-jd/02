import React from "react";
import { navLinks } from "../navLinks";
import Link from "next/link";
import { cart, downArrow, login, searchIcon, wishlist } from "../icons/Icons";

function Header() {
  return (
    <div className="container_large">
      <div className="flex justify-between items-center gap-3 lg:py-6 py-3">
        <div className="text-black text-center text-2xl sm:text-3xl capitalize font-medium leading-normal">
          logo
        </div>
        <ul className=" hidden md:flex xl:ml-20 ml-10 mr-auto items-center gap-6 md:gap-10 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.key} className="position-relative group">
              <Link
                className=" flex items-center uppercase text-[12px] font-medium"
                href={link.href}
              >
                {link.label}
                {downArrow}
              </Link>
              <div className=" flex absolute top-[130px] z-10 w-2/4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-full duration-300 ease-in origin-top overflow-hidden ">
                {link.subMenu && (
                  <ul className="grid grid-cols-4 gap-x-4 bg-white p-5 pb-0">
                    {link.subMenu.map((item) => (
                      <li key={item.id} className="relative">
                        <Link
                          href={item.href}
                          className="text-[10px] font-normal inline-block "
                        >
                          <img src={item.img} alt="" className="" />
                          <h3 className="text-sm text-black font-medium text-center uppercase my-3 tracking-widest">
                            {item.label}
                          </h3>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {link.megaMenu &&
                  link.megaMenu.map((megaMenuitem) => (
                    <ul>
                      {megaMenuitem.subMenu && (
                        <li key={megaMenuitem.id}>
                          <h3>{megaMenuitem.label}</h3>
                          <ul>
                            {megaMenuitem.subMenu.map((subMenuitem) => (
                              <li key={subMenuitem.id}>
                                <Link
                                  href={subMenuitem.href}
                                  className="text-[10px] font-normal inline-block "
                                >
                                  {subMenuitem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 ">
          {searchIcon}
          {login}
          {wishlist}
          {cart}
        </div>
      </div>
    </div>
  );
}

export default Header;
