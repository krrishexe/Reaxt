import Navbar from './Navbar'
import hero2 from "../assets/body-bg-2.jpg"
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { IoHeartDislikeOutline } from "react-icons/io5";

import '../App.css'
import Card from './Card';

function Stories() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* hero bg */}
      <div className='border-b-2 border-gray-700'>
        <img className='h-80 object-cover w-screen' src={hero2} alt="" />
      </div>
      <div className='relative flex justify-center items-center flex-col container'>
        <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_400_400/0/1667373388482?e=1705536000&v=beta&t=-2HnbTEGp5ORczULT2PwThEqgzYprhWRXt8isdq0NHA" alt="" className='rounded-full border-2 border-gray-700 anujImg' />
        <div className='flex content'>
          <p style={{ fontFamily: 'Josefin Sans' }} className='md:text-xl lg:text-3xl text-black font-bold'>Anuj Gosalia</p>
          <span><MdOutlineNetworkWifi className='text-violet-600' /></span>
          <span><IoCheckmarkDoneCircle style={{ color: '#62e5a3' }} /></span>
        </div>

        <div className='flex content'>
          <div className='text-gray-300'>
            <div className='border-gray-300 rounded-lg border-2 px-2 btn1'>6482</div>
            <span className='text-sm md:text-lg lg:text-xl'>Followers</span>
          </div>

          <div className='text-gray-300'>
            <div className='border-gray-300 rounded-lg border-2 px-2 btn1'>245</div>
            <span className='text-sm md:text-lg lg:text-xl'>Following </span>
          </div>
        </div>
        <section id='mid' className='flex flex-col items-start '>
          <div className='p-8 md:p-16 lg:p-30'>
            <p>Co-founder & CEO at Terribly Tiny Tales</p>
            <a href="" className='text-cyan-300'>link to ig</a>
            <div className='flex items-center justify-around'>
              <IoMdStar className='text-white bg-cyan-300 rounded-full h-5 w-5' />
              <span>125</span>
              <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
              <span>12</span>
              <FaEye className='text-white bg-slate-500 rounded-full h-5 w-5' />
              <span>57.8k</span>
              <IoHeartDislikeOutline className='text-white bg-pink-600 rounded-full h-5 w-5' />
              <span>26.0k</span>
            </div>
          </div>
        </section>

      </div>
        <section id='bottom'>
        <button className='text-blue-400 bg-white rounded-none border border-b-0  border-slate-200 '>
                134 Posts
            </button>
        <Card />
        <Card />
        <Card />
        </section>  



    </div>
  )
}

export default Stories
