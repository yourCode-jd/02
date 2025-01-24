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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="main-heading my-10">Our Blog</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="!flex gap-10 pb-10">
            <div className="text-black text-3xl flex items-center justify-center relative h-[450px]">
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
              <span className="text-sm tracking-[4px] sm:tracking-[8px] inline-block uppercase">
                NOW ON SALE!
              </span>
              <h1 className="banner-heading uppercase">DESK DECOR</h1>
              <p className="text-sm sm:text-base max-w-[80%] sm:max-w-[50%] leading-6 sm:leading-7 text-gray-600 font-normal">
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
