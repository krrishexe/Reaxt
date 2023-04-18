import React from 'react'
import { FiPieChart } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import "../Media/Styles/dashboard.css"
import pic from "../Media/images/apple.png"




function Dashboard() {


  return (
    <div className='outer'>
      <div className='left-dash'>
        <div className='top-content'>
          <h1 className='dash-board'>Board.</h1>
          <div className="list-item"><FiPieChart style={{ color: 'white' }} /><h4 className='bold gap'>Dashboard</h4></div>
          <div className="list-item"><FiPieChart style={{ color: 'white' }} /><h4 className='gap'>Transactions</h4></div>
          <div className="list-item"><FiPieChart style={{ color: 'white' }} /><h4 className='gap'>Schedules</h4></div>
          <div className="list-item"><HiOutlineUserCircle style={{ color: 'white' }} /><h4 className='gap'>Users</h4></div>
          <div className="list-item"><AiOutlineSetting style={{ color: 'white' }} /><h4 className='gap'>Settings</h4></div>
        </div>

        <div className='bottom-content'>
          <h5>Help</h5>
          <h5 className='gap2'>Contact Us</h5>
        </div>
      </div>

      <div className='right-dash'>
        <div className='topdiv'>
          <h1 className='dash-head'>Dashboard</h1>
          <div className='top-3'>

            <input placeholder='Search...' type='search gap'></input>
            <BiBell className='gap' />
            <img src={pic} className='gap'  alt="" style={{height:"24px",width:"24px",borderRadius:"25%"}} />

          </div>
        </div>
        <div className='div4'>

        </div>
        <div className='chart'></div>
        <div className='twodiv'>
          <div className='left-chart'>

          </div>
          <div className='right-chart'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
