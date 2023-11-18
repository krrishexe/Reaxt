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
import data from "../../data.json"

function Stories() {

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* hero bg */}
      <div className='shadow-lg shadow-gray-500 border-b-2 border-gray-700'>
        <img className='h-60 md:h-72 object-cover w-screen' src={hero2} alt="" />
      </div>
      <div className='relative flex justify-center items-center flex-col '>
        <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_400_400/0/1667373388482?e=1705536000&v=beta&t=-2HnbTEGp5ORczULT2PwThEqgzYprhWRXt8isdq0NHA" alt="" className='shadow-lg shadow-gray-500 rounded-full border-2 border-gray-700 anujImg' />
        <div className='flex content items-center'>
          <p style={{ fontFamily: 'Josefin Sans' }} className='sm:text-2xl md:text-3xl mt-2 md:mt-3 lg:mt-3 text-lg text-black font-bold'>{data.username}</p>
          <span><MdOutlineNetworkWifi className='text-violet-600 mx-1' /></span>
          <span><IoCheckmarkDoneCircle style={{ color: '#62e5a3' }} /></span>
        </div>

        <div className='flex content'>
          <div className='text-gray-300'>
            <div className='border-gray-300 rounded-lg border-2 px-2 md:px-3 btn1'>{data.followers}</div>
            <span className='text-sm md:text-base '>Followers </span>
          </div>

          <div className='text-gray-300'>
            <div className='border-gray-300 rounded-lg border-2 px-2 md:px-3 btn1'>{data.following}</div>
            <span className='text-sm md:text-base'>Following </span>
          </div>
        </div>

        <section id='mid' className='flex flex-col items-start '>
          <div className='p-8 sm:my-6 md:my-8 lg:my-10'>
            <p className='sm:text-lg md:text-2xl'>Co-founder & CEO at Terribly Tiny Tales</p>
            <a href="" className='text-cyan-300'>{data.userIgLink}</a>
            <div className='flex items-center justify-around'>
              <IoMdStar className='text-white bg-cyan-300 rounded-full h-5 w-5' />
              <span>{data.stars}</span>
              <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
              <span>{data.likes}</span>
              <FaEye className='text-white bg-slate-500 rounded-full h-5 w-5' />
              <span>{Math.floor(Number(data.views)/100) / 10.0 + 'k'}</span>
              <IoHeartDislikeOutline className='text-white bg-pink-600 rounded-full h-5 w-5' />
              <span>{Math.floor(Number(data.hearts)/100)/10.0 +'k'}</span>
            </div>  
          </div>
        </section>

      </div>
        <section id='bottom'>
        <button className='text-blue-400 bg-white rounded-none border border-b-0  border-slate-200 '>
                {data.posts} Posts
            </button>
        <Card data={data} />
        </section>  



    </div>
  )
}

export default Stories
