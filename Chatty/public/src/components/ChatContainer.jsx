import React from 'react'
import Logout from './Logout'
import ChatInput from './ChatInput'
import Messages from './Messages'
import axios from 'axios'
import { sendMessageRoute } from '../utils/APIRoutes'
function ChatContainer({ currentChat, currentUser }) {

    const handleSendMsg = async (msg) => {
        console.log(currentUser, currentChat)
        await axios.post(sendMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
            message: msg,
        })
    }

    return (
        <div className='py-4'>
            <div className="flex justify-between items-center px-8 ">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <img className='h-12' src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="" />
                    </div>
                    <div className="username">
                        <h3 className='text-white'>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout />
            </div>
            <Messages />
            <ChatInput handleSendMsg={handleSendMsg} />
        </div>
    )
}

export default ChatContainer
