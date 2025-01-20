import React from 'react'
import Image from 'next/image'

function CategoryData(props) {
    return (
        <div className="text-black text-3xl flex items-center justify-center relative xl:h-[500px] md:h-[300px] h-[250px]">
            <Image src={props.src}
                width={1920}
                height={800}
                alt='banner slide'
                className="w-full h-full object-cover hover:animate-scale"
            />
            <div className="absolute left-5 lg:left-10 bottom-5 lg:bottom-10 leading-[0] z-[1]">
                <span className="text-sm tracking-[1px] inline-block uppercase">20% OFF ALL WEEKS</span>
                <h3 className="text-xl lg:text-2xl text-black font-medium uppercase my-2 tracking-[2px]">LAMP DECOR</h3>
                <a href="" className="inline-block text-sm text-black">SHOP NOW</a>
            </div>
        </div>
    )
}

export default CategoryData