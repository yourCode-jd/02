import React from "react";
import Image from "next/image";
import { categorySlides } from "@/staticDb/data";

function Category() {
  return (
    <div className="bg-slate-100 pt-16">
      <div className="container">
        <h2 className="main-heading text-center">TOP FURNITURE CATEGORIES</h2>
        <div className="flex items-center justify-between gap-8 pt-10 pb-16 ">
          {categorySlides.map((item) => (
            <>
              <div>
                <div
                  key={item.id}
                  className="flex items-center justify-center group cursor-pointer overflow-hidden"
                >
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
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
