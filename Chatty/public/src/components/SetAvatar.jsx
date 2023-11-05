import { useNavigate } from 'react-router-dom'
import loader from '../assets/loader.gif'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik'
import { registerSchema } from '../models';
import axios from 'axios'
import { setAvatarRoute } from '../utils/APIRoutes';
import { Buffer } from 'buffer'


function SetAvatar() {

  const api = "https://api.multiavatar.com/45678944"
  const navigate = useNavigate()

  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  const [isLoading, setIsLoading] = useState([true])

  const setProfilePicture = async () => {

  }

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
      setIsLoading(false);
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{backgroundColor:"#131324"}} className='flex justify-center items-center flex-col gap-12 h-screen w-screen '>
        <div>
          <h1 className='text-white'>Pick an avatar as your profile picture</h1>
        </div>
        <div className='flex gap-8'>
          {
            avatars.map((avatar, index) => {
              return (
                <div key={avatar} className={`border-4 p-1 border-solid border-transparent border-green-300 rounded-full flex justify-center items-center duration-500 transition-all   ${selectedAvatar === index ? 'selected' : ""}`}>
                  <img className='h-24' src={`data:image/svg+xml;base64,${avatar}`} onClick={()=>{setSelectedAvatar(index)}} alt="" />

                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default SetAvatar
