import { cart, compare, searchIcon, wishlist } from "../icons/Icons";

// Product Color Swatches
export const Swatches = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="swatchRed"></li>
    <li className="swatchBrown"></li>
  </ul>
);

// Product sizes
export const ProductSize = () => (
  <ul className="flex gap-2 justify-center mt-4">
    <li className="variantSmile">S</li>
    <li className="variantMedium">M</li>
  </ul>
);

// Product buttons
export const ProductBtns = () => (
  <ul className="flex items-center justify-center gap-4 absolute opacity-0 top-0 duration-200 ease-in group-hover:top-4 group-hover:opacity-100 left-1/2 -translate-x-1/2">
    <li className="productBtn">{cart}</li>
    <li className="productBtn">{wishlist}</li>
    <li className="productBtn">{compare}</li>
    <li className="productBtn">{searchIcon}</li>
  </ul>
);

// Product card
// export const ProductItem = ({ index, item }) => (

// );
