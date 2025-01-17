import React from 'react'
import Image from 'next/image'
function Hero() {
    return (
        <div className="">
            <div className="text-black text-3xl flex items-center justify-center">
                <Image
                    src={"/slider-1.png"}
                    width={1920}
                    height={800}
                    alt='banner slide'
                />
            </div>
        </div>
    )
}

export default Hero
