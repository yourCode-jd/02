import React from "react";
import { cart, compare, searchIcon, wishlist } from "../icons/Icons";

// Product Color Swatches
export const Swatches = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="swatchRed"></li>
    <li className="swatchBrown"></li>
  </ul>
);

// Product Sizes
export const ProductSize = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="variantSmall">S</li>
    <li className="variantMedium">M</li>
  </ul>
);

// Product Buttons
export const ProductBtns = () => (
  <ul className="flex items-center justify-center gap-4 absolute opacity-0 bottom-0 duration-200 ease-in group-hover:bottom-4 group-hover:opacity-100 left-1/2 -translate-x-1/2">
    <li className="productBtn">{cart}</li>
    <li className="productBtn">{wishlist}</li>
    <li className="productBtn">{compare}</li>
    <li className="productBtn">{searchIcon}</li>
  </ul>
);

// Product Badge
export const ProBadge = ({ title }) => (
  <div className="text-xs text-white bg-orange-500 p-1 px-3 absolute top-3 left-3 rounded-sm">
    {title}
  </div>
);
