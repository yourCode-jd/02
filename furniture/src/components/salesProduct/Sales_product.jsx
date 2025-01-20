import React from "react";
import sales_productData from "@/components/salesProduct/Sales_productData";
import Image from "next/image";

function salesProduct() {
  return (
    <div className="container_large">
      <h2 className="main-heading">hot sales !</h2>
      <ul>
        {sales_productData.map((item) => (
          <li className="">
            {item.alt}
            <Image width={600} height={600} src={item.img} />
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default salesProduct;
