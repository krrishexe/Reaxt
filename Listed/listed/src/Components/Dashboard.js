import React from 'react'
import { FiPieChart } from 'react-icons/fi';
import {HiOutlineUserCircle} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'





function Dashboard() {


  return (
    <>
      <div className='left-dash'>
        <div className='top-content'>
          <h1>Board.</h1>
          <div className="list-item"><FiPieChart /><h3>Dashboard</h3></div>
          <div className="list-item"><FiPieChart /><h3>Transactions</h3></div>
          <div className="list-item"><FiPieChart /><h3>Schedules</h3></div>
          <div className="list-item"><HiOutlineUserCircle /><h3>Users</h3></div>
          <div className="list-item"><AiOutlineSetting /><h3>Settings</h3></div>
        </div>

        <div className='bottom-content'>

        </div>
      </div>

      <div className='right-dash'>

      </div>
    </>
  )
}

export default Dashboard
