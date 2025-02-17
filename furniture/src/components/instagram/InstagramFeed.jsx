"use client";
import React from "react";
import Image from "next/image";
import { InstItems } from "@/staticDb/data";
import Slider from "react-slick";
const InstagramFeed = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="container_large">
      <Slider {...settings}>
        {InstItems.map((InstItem) => (
          <div
            key={InstItem.id}
            className=" group cursor-pointer overflow-hidden group"
          >
            <Image
              src={InstItem.img}
              width={300}
              height={300}
              alt={InstItem.alt}
              className="w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramFeed;
