import Navbar from './Navbar'
import hero1  from "../assets/body-bg-1.jpg"
import hero2  from "../assets/body-bg-2.jpg"
import '../App.css'

function Stories() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* hero bg */}
      <div className='border-b-2 border-gray-700'>
        <img  className='h-80 object-cover  w-full' src={hero2} alt="" />
      </div>
      <div className='relative flex justify-center items-center'>
        <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_400_400/0/1667373388482?e=1705536000&v=beta&t=-2HnbTEGp5ORczULT2PwThEqgzYprhWRXt8isdq0NHA" alt="" className='rounded-full border-2 border-gray-700 anujImg' />
        <div className=''>
          <p style={{fontFamily: 'Josefin Sans'}} className='text-black font-bold'>Anuj Gosalia</p>
          <span>icon1</span>
          <span>icon2</span>
        </div>
      </div>


    </div>
  )
}

export default Stories
