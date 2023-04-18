import { FiPieChart } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { RiProjector2Line } from 'react-icons/ri'
import { TbTags } from 'react-icons/tb'
import { AiOutlineLike } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import "../Media/Styles/dashboard.css"
import pic from "../Media/images/apple.png"
import { Chart } from "react-google-charts";


export const data = [
  ["Year", "Guest", "User"],
  ["Week 1", 1000, 400],
  ["Week 2", 1170, 460],
  ["Week 3", 660, 1120],
  ["Week 4", 1030, 540],
];

export const options = {
  title: "Activities",
  curveType: "function",
  legend: { position: "right" },
  
};



function Dashboard(props) {


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
        <div className='chart1'>
          <h1>Hello</h1>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            legendToggle
          />
        </div>
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
