import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

function Card() {
    return (
        <div>
           
            <div className='border border-slate-200 p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-bold '>A Changing World Order</h2>
                    <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
                </div>
                <p className='text-slate-600 my-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quos reprehenderit quo dolore magnam sequi obcaecati atque, distinctio eaque iure nobis quisquam alias voluptas ut error ad. Sapiente, eveniet officiis.</p>

                <div className='flex justify-between'>
                    <div>
                        <span className='text-cyan-300 '>musing </span><p className='inline font-bold text-slate-600'>by username</p>
                    </div>
                    <div>
                        <p className='flex-wrap text-gray-300'>Date . 2 mins read .102 views</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
