import React from "react";
import { ProductItem } from "@/components/salesProduct/ProductVariants";
import { SalesProductData } from "@/staticDb/data";

function SalesProduct() {
  return (
    <div className="container">
      <h2 className="main-heading text-center mt-10">Hot Sales !</h2>
      <ul className="grid grid-cols-4 gap-8 mt-12">
        {SalesProductData.map((item, index) => (
          <ProductItem index={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SalesProduct;
