import React from "react";
import SalesProductCard from "./SalesProductCard";
import { SalesProductData } from "@/staticDb/data";

function SalesProduct() {
  return (
    <div className="container">
      <h2 className="main-heading text-center mt-10">Hot Sales!</h2>
      <ul className="grid grid-cols-4 gap-8 mt-12 pb-10">
        {SalesProductData.map((product) => (
          <SalesProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default SalesProduct;
