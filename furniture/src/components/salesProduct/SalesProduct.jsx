import React from "react";
import Image from "next/image";
import {
  ProductSize,
  Swatches,
  ProductBtns,
} from "@/components/salesProduct/ProductVariants";
import { SalesProductData } from "@/staticDb/data";

function SalesProduct() {
  return (
    <div className="container">
      <h2 className="main-heading text-center mt-10">Hot Sales !</h2>
      <ul className="grid grid-cols-4 gap-8 mt-12">
        {SalesProductData.map((item) => (
          <li className="relative group">
            <Image
              className=""
              width={600}
              height={600}
              src={item.img}
              alt={item.alt || "Product image"}
            />
            <h3 className="mt-4 text-center text-base text-black tracking-widest">
              {item.title}
            </h3>
            <div className="mt-3 text-center text-sm text-black">$250</div>
            <Swatches />
            <ProductSize />
            <ProductBtns />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalesProduct;
