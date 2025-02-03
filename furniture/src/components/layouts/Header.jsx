import React from "react";
import { navLinks, navIcons } from "../navLinks";
import Link from "next/link";
import { downArrow } from "../icons/Icons";

function Header() {
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
          {navIcons.map(({ id, href, icon }) => (
            <Link key={id} href={href}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
