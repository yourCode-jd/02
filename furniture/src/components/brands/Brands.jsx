import React from "react";
import Image from "next/image";
import { logoSlides } from "@/staticDb/data";

function Brands() {
  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 pt-16 pb-20">
        {logoSlides.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center h-[150px] w-[200px] border border-gray-200 group cursor-pointer"
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
