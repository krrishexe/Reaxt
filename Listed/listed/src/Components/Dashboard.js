import { FiPieChart } from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { RiProjector2Line } from 'react-icons/ri'
import { TbTags } from 'react-icons/tb'
import { AiOutlineLike } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import "../Media/Styles/dashboard.css"
import pic from "../Media/images/apple.png"
import LineChart from "./LineChart";
import PieChart from './Piechart';

function Dashboard(props) {

  const { logout } = useAuth0();

  return (
    <div className='outer'>
      <div className='left-dash'>
        <div className='top-content'>
          <h1 className='dash-board'>Board.</h1>
          <div className="list-item"><FiPieChart style={{ color: 'white' }} /><h4 className='bold gap'>Dashboard</h4></div>
          <div className="list-item"><TbTags /><h4 className='gap'>Transactions</h4></div>
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
            <button className='btn' style={{textAlign:"center"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          <div className='top-3'>
            <input placeholder='Search...' className='search' type='search'></input>
            <BiBell className='gap fontsize' />
            <img src={pic} className='gap' alt="" style={{ height: "24px", width: "24px", borderRadius: "25%" }} />
          </div>
        </div>
        <div className='div4'>
          <div className='green'>
            <div className='icon'>
              <RiProjector2Line className='fontsize' />
            </div>
            <div>
              <p className='gap2'>Total Revenues</p>
              <h1 className='dash-head'>$6,392,989</h1>
            </div>

          </div>
          <div className='yellow'>
            <div className='icon'>
              <TbTags className='fontsize' />
            </div>
            <div>
              <p className='gap2'>Total Transactions</p>
              <h1 className='dash-head'>2890</h1>
            </div>

          </div>
          <div className='red'>
            <div className='icon'>
              <AiOutlineLike className='fontsize' />
            </div>
            <div>
              <p className='gap2'>Total Likes</p>
              <h1 className='dash-head'>10,000</h1>
            </div>

          </div>

          <div className='purple'>
            <div className='icon'>
              <FiUsers className='fontsize' />
            </div>
            <div >
              <p className='gap2'>Total Users</p>
              <h1 className='dash-head '>999</h1>
            </div>

          </div>

        </div>
        
          <LineChart />
        
        <div className='twodiv'>
          <div className='left-chart'>
            <PieChart />

          </div>
          <div className='right-chart'>
            <div className='twodiv1'>
              <h1 className='dash-head smol'>Today's Schedule</h1>
              <p className='smol-para'>See All &gt;</p>
            </div>

            <div>
              <div className='top-4'>
                <div>
                  <div className='border-style'></div>
                </div>
                <div className='helo'>
                  <h3 className='smol-head'>Meeting with suppliers from Kuta Bali</h3>
                  <p className='smol-para'>14:00-15:00</p>
                  <p className='smol-para'>at Sunset Road,Kuta ,Bali</p>
                </div>
              </div>

              <div className='top-4'>
                <div>
                  <div className='border-style2'></div>
                </div>
                <div className='helo'>
                  <h3 className='smol-head'>Meeting with suppliers from Kuta Bali</h3>
                  <p className='smol-para'>14:00-15:00</p>
                  <p className='smol-para'>at Sunset Road,Kuta ,Bali</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
