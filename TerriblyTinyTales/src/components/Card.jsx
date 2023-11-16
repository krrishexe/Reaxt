import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";

function Card(props) {
    let [cards,setCards] = useState([])
    useEffect(()=>{
        setCards(props.data['posts_data'])
    },[])
    return (
        <div>
           {
            cards.map((card,index) =>{
                return(
                    <div key={index} className='border border-slate-200 p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-bold '>{card.title}</h2>
                    <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
                </div>
                <p className='text-slate-600 my-8'>{card.description}</p>

                <div className='flex justify-between'>
                    <div>
                        <span className='text-cyan-300 '>musing </span><p className='inline font-bold text-slate-600'>by {card.ig_username}</p>
                    </div>
                    <div>
                        <p className='flex-wrap text-gray-300'>{card.date} . {card.reading_time} . {card.views}</p>
                    </div>
                </div>
            </div> 
                )
            })
            
           }
        </div>
    )
}

export default Card


 