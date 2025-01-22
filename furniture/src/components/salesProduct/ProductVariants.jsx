import { cart, compare, searchIcon, wishlist } from "../icons/Icons";
import Image from "next/image";

export const Swatches = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="swatchRed"></li>
    <li className="swatchBrown"></li>
  </ul>
);

export const ProductSize = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="variantSmile">S</li>
    <li className="variantMedium">M</li>
  </ul>
);

export const ProductBtns = () => (
  <ul className="flex items-center justify-center gap-4 absolute bottom-44 left-1/2 -translate-x-1/2">
    <li className="productBtn">{cart}</li>
    <li className="productBtn">{wishlist}</li>
    <li className="productBtn">{compare}</li>
    <li className="productBtn">{searchIcon}</li>
  </ul>
);

export const ProductItem = ({ index, item }) => (
  <li className="relative">
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
);
