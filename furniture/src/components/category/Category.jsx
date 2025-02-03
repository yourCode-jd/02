import React from "react";
import Image from "next/image";
import { categorySlides } from "@/staticDb/data";

function Category() {
  return (
    <div className="bg-slate-100 pt-8 sm:pt-16">
      <div className="container">
        <h2 className="main-heading text-center">TOP FURNITURE CATEGORIES</h2>
        <ul className="flex flex-wrap items-center justify-center gap-0 pt-10 pb-10 sm:pb-16 ">
          {categorySlides.map((item) => (
            <li key={item.id} className="lg:flex-1 md:w-1/3 md:p-4 w-1/ p-2 ">
              <div className="flex items-center justify-center group cursor-pointer overflow-hidden">
                <Image
                  src={item.img}
                  width={400}
                  height={400}
                  alt={item.alt}
                  className="group-hover:animate-shake"
                />
              </div>
              <h3 className="text-base text-black uppercase mt-5 tracking-widest font-medium text-center">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
