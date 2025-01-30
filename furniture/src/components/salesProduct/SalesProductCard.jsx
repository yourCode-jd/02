import React from "react";
import Image from "next/image";
import {
  Swatches,
  ProductSize,
  ProductBtns,
  ProBadge,
} from "./ProductVariants";

const SalesProductCard = ({ product }) => (
  <li className="relative group">
    <div className="relative">
      {/* Product Image */}
      <Image
        width={600}
        height={600}
        src={product.img}
        alt={product.alt || "Product image"}
        priority
      />

      {/* Badge */}
      {product.badgeTitle && <ProBadge title={product.badgeTitle} />}

      {/* Product Buttons */}
      <ProductBtns />
    </div>
    {/* <div className="mt-4 text-center text-base text-black tracking-widest">
      {product?.reviews?.map((item) => (
        <div key={item.id}>
          <div>{item.author}</div>
          <div>{item.rating}</div>
          <div>{item.comment}</div>

          {item.post.map((post) => (
            <div key={post.id}>
              <div>{post.name}</div>

              {post.stress.map((work_stress) => (
                <div>
                  <div>{work_stress.level}</div>
                  {work_stress.relief.map((relief_stress) => (
                    <div key={relief_stress.id}>
                      <div>{relief_stress.name}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div> */}
    {/* Product Title */}
    <h3 className="mt-4 text-center text-base text-black tracking-widest">
      {product.title}
    </h3>

    {/* Price */}
    <div className="mt-3 text-center text-sm text-black">
      ${product.price.toFixed(2)}
    </div>

    {/* Swatches and Sizes */}
    <Swatches />
    <ProductSize />
  </li>
);

export default SalesProductCard;
