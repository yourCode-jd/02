"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { slides } from "@/staticDb/data";

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    ),
    prevArrow: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    ),
  };

  return (
    <div className="container">
      <h2 className="main-heading my-6 sm:my-10 text-center md:text-left">
        Our Blog
      </h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="!flex flex-wrap lg:flex-nowrap items-center gap-10 "
          >
            <div className="flex items-center justify-center relative h-[300px] md:h-[450px]">
              <Image
                src={slide.img}
                width={1920}
                height={800}
                alt="banner slide"
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <span className="text-xs tracking-[4px] sm:tracking-[8px] inline-block uppercase text-gray-600">
                NOW ON SALE!
              </span>
              <h1 className="banner-heading uppercase text-2xl xl:max-w-[80%]">
                Embracing Modern Technology in Home Decor
              </h1>
              <p className="text-sm sm:text-base xl:max-w-[50%] leading-6 sm:leading-7 text-gray-600 font-normal">
                Every woman needs a wallet to keep her cards and cash organised.
                Find the perfect one for you in our extensive and varied range.
              </p>
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
