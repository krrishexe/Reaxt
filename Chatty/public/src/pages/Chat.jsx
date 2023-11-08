import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allUsersRoute } from '../utils/APIRoutes'
import Contacts from '../components/Contacts'
import axios from 'axios'

function Chat() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login')
    }
    else {
      const fetchCurrentUser = async () => {
        setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))
      }
      fetchCurrentUser()
      console.log("current user called", currentUser)
    }
  }, [])

  useEffect(() => {
    const currentUserData = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
          setContacts(data.data)
          console.log(contacts)
        }
        else {
          navigate('/setAvatar')
        }
      }
    }
    currentUserData()
  }, [currentUser])
  return (
    <>
    <div style={{ backgroundColor: '#131324' }} className='h-screen w-screen flex justify-center items-center flex-col gap-4 '>
      <div style={{ backgroundColor: '#00000076', height: '85vh', width: '85vw', display: 'grid', gridTemplateColumns: '25% 75%' }} >
        <Contacts contacts={contacts} currentUser={currentUser} />
      </div>
    </div>
    </>
  )
}

export default Chat
