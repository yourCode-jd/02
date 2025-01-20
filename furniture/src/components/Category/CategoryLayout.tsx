import React from 'react'
import Image from 'next/image'
import CategoryData from './CategoryData'

function CategoryLayout() {
    return (
        <div className="container_large">
            <ul className='flex flex-wrap gap-5 xl:gap-10 py-5 xl:py-10'>
                <li className="relative lg:flex-1 flex-auto overflow-hidden"><CategoryData src={"/lamp.png"} /></li>
                <li className="relative lg:flex-1 flex-auto overflow-hidden"><CategoryData src={"/plants.png"} /></li>
                <li className="relative lg:flex-1 flex-auto overflow-hidden"><CategoryData src={"/cabinet.png"} /></li>
            </ul>
        </div >
    )
}

export default CategoryLayout