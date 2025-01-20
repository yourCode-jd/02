import React from 'react'
import Image from 'next/image'

function CategoryData(props) {
    return (
        <div className="text-black text-3xl flex items-center justify-center relative h-[500px]">
            <Image src={props.src}
                width={1920}
                height={800}
                alt='banner slide'
                className="w-full h-full object-cover"
            />
            <div className="absolute left-10 bottom-10">
                <span className="text-sm tracking-[2px] inline-block uppercase">20% OFF ALL WEEKS</span>
                <h3 className="text-2xl text-black font-medium uppercase mt-1">LAMP DECOR</h3>
                <a href="" className="inline-block text-sm text-black">SHOP NOW</a>
            </div>
        </div>
    )
}

export default CategoryData