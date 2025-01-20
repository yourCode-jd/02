import React from 'react'
import Image from 'next/image'
function Hero() {
    return (
        <div className="text-black text-3xl flex items-center justify-center relative h-[400px] lg:h-full">
            <Image
                src={"/slider-2.png"}
                width={1920}
                height={800}
                alt='banner slide'
                className="w-full h-full object-cover"
            />
            <div className="absolute xl:left-60 lg:left-40 left-5 top-1/2 -translate-y-1/2">
                <span className="text-sm tracking-[4px] sm:tracking-[8px] inline-block uppercase">NOW ON SALE!</span>
                <h1 className="banner-heading uppercase">DESK DECOR</h1>
                <p className="text-sm sm:text-base max-w-[80%] sm:max-w-[50%] leading-6 sm:leading-7 text-gray-600 font-normal">Every woman needs a wallet to keep her cards and cash organised. Find the perfect one for you in our extensive and varied range.</p>
                <button className='btn-primary'>Shop Now</button>
            </div >
        </div >
    )
}

export default Hero
