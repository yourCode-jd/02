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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container_large">
      <Slider {...settings}>
        {InstItems.map((InstItem) => (
          <div className="h-[300px] w-[300px] group cursor-pointer overflow-hidden group overlay[scale:0.4]">
            <Image
              src={InstItem.img}
              width={300}
              height={300}
              alt={InstItem.alt}
              className="group-hover:animate-scale3 group-hover:overlay[scale:1]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramFeed;
