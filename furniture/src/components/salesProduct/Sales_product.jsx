import React from "react";
import sales_productData from "@/components/salesProduct/Sales_productData";
import Image from "next/image";

function salesProduct() {
  return (
    <div className="container">
      <h2 className="main-heading text-center mt-10">hot sales !</h2>
      <ul className="grid grid-cols-4 gap-8 mt-12">
        {sales_productData.map((item) => (
          <li className="">
            <Image
              width={600}
              height={600}
              src={item.img}
              alt={item.alt}
            ></Image>
            <h3 className="mt-4 text-center text-base text-black tracking-widest">
              {item.title}
            </h3>
            <div className="mt-2 text-center text-sm text-black">$250</div>
            <div className="relative"></div>
          </li>
        ))};
      </ul>
    </div>
  );
}

export default salesProduct;
