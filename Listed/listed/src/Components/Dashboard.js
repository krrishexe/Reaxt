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
          <div className="list-item"><FiPieChart style={{color:'white'}} /><h4 className='bold gap'>Dashboard</h4></div>
          <div className="list-item"><FiPieChart style={{color:'white'}}/><h4 className='gap'>Transactions</h4></div>
          <div className="list-item"><FiPieChart style={{color:'white'}}/><h4 className='gap'>Schedules</h4></div>
          <div className="list-item"><HiOutlineUserCircle style={{color:'white'}}/><h4 className='gap'>Users</h4></div>
          <div className="list-item"><AiOutlineSetting style={{color:'white'}}/><h4 className='gap'>Settings</h4></div>
        </div>

        <div className='bottom-content'>
          <h5>Help</h5>
          <h5 className='gap2'>Contact Us</h5>
        </div>
      </div>

      <div className='right-dash'>

      </div>
    </div>
  )
}

export default Dashboard
