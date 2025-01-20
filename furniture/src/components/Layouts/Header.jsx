import React from "react";
import { navLinks } from "../NavLinks";
import Link from "next/link";
import { cart, downArrow, login, searchIcon, wishlist } from "../Icons/Icons";

function Header() {
  return (
    <div className="container_large">
      <div className="flex justify-between items-center gap-3 lg:py-6 py-3">
        <div className="text-black text-center text-2xl sm:text-3xl capitalize font-medium leading-normal">
          logo
        </div>
        <ul className=" hidden md:flex xl:ml-20 ml-10 mr-auto items-center gap-6 md:gap-12">
          {navLinks.map((link) => (
            <Link
              className=" flex items-center uppercase text-[12px] font-medium"
              href={link.href}
              key={link.key}
            >
              {link.label}
              {downArrow}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3">
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
