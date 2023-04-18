import React from 'react'
import { FiPieChart } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import "../Media/Styles/dashboard.css"




function Dashboard() {


  return (
    <div className='outer'>
      <div className='left-dash'>
        <div className='top-content'>
          <h1 className='dash-board'>Board.</h1>
          <div className="list-item"><FiPieChart style={{color:'white'}} /> Dashboard </div>
          <div className="list-item"><FiPieChart style={{color:'white'}}/><h4>Transactions</h4></div>
          <div className="list-item"><FiPieChart style={{color:'white'}}/><h4>Schedules</h4></div>
          <div className="list-item"><HiOutlineUserCircle style={{color:'white'}}/><h4>Users</h4></div>
          <div className="list-item"><AiOutlineSetting style={{color:'white'}}/><h4>Settings</h4></div>
        </div>

        <div className='bottom-content'>
          <h5>Help</h5>
          <h5>Contact Us</h5>
        </div>
      </div>

      <div className='right-dash'>

      </div>
    </div>
  )
}

export default Dashboard
