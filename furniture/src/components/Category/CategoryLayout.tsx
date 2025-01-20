import React from 'react'
import Image from 'next/image'
import CategoryData from './CategoryData'

function CategoryLayout() {
    return (
        <div className="container_large">
            <ul className='flex gap-10 py-10'>
                <li className="flex-1"><CategoryData src={"/lamp.png"} /></li>
                <li className="flex-1"><CategoryData src={"/plants.png"} /></li>
                <li className="flex-1"><CategoryData src={"/cabinet.png"} /></li>
            </ul>
        </div >
    )
}

export default CategoryLayout