import React from "react";
import { emailIcon } from "../icons/Icons";

function Newsletter() {
  return (
    <div className="border-t">
      <div className="container">
        <div className="text-center py-20">
          <span className="text-sm tracking-[10px] text-black inline-block">
            ENJOY 15% OFF
          </span>
          <h2 className="main-heading">SUBSCRIBE TO OUR NEWSLETTER .</h2>
          <form action="" className="mt-14 max-w-[600px] mx-auto relative">
            <input
              className="w-full pl-0 py-3 pr-12 border-b border-black focus:outline-none capitalize text-sm"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              type="submit"
            >
              {emailIcon}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
