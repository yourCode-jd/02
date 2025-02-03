import React from "react";
import Image from "next/image";
import { logoSlides } from "@/staticDb/data";

function Brands() {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-3 pt-16 pb-10 sm:pb-20">
        {logoSlides.map((brand) => (
          <div
            key={brand.id}
            className="flex lg:flex-1 items-center justify-center h-[150px] w-[150px] md:w-[200px] border border-gray-200 group cursor-pointer"
          >
            <Image
              src={brand.img}
              width={120}
              height={120}
              alt={brand.alt}
              className="group-hover:animate-scale3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
