"use client";
import React from "react";
import Image from "next/image";
import { reviews } from "@/staticDb/data";
import Slider from "react-slick";
const Reviews = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
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
      <div className="pt-20">
        <Slider {...settings}>
          {reviews.map((reviewItem) => (
            <div
              key={reviewItem.id}
              className="border border-gray-200 p-14 !w-[98%] mb-5 "
            >
              <div className="flex items-center gap-2">{reviewItem.icon}</div>
              <h3 className="text-base font-medium my-5">{reviewItem.title}</h3>
              <p className="text-sm my-8 text-gray-400">
                {reviewItem.description}
              </p>
              <div className="flex items-center gap-5 mt-5">
                <div className="h-[75px] w-[75px] group cursor-pointer rounded-full overflow-hidden">
                  <Image
                    src={reviewItem.img}
                    width={120}
                    height={120}
                    alt={reviewItem.alt}
                    className="group-hover:animate-scale3"
                  />
                </div>
                <h4 className="text-sm font-normal text-gray-500 tracking-widest">
                  {reviewItem.imgTitle}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
