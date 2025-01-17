import React from "react";
import { navLinks } from "../navLinks";
import Link from "next/link";
import { cart, downArrow, login, searchIcon, wishlist } from "../Icons/Icons";

function Header() {
  return (
    <div className="container_large">
      <div className="flex justify-between items-center gap-3 py-8">
        <div className="text-black text-center text-2xl uppercase font-bold leading-normal">
          LOGO
        </div>
        <ul className="ml-20 mr-auto flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              className=" flex items-center uppercase text-sm font-medium"
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
