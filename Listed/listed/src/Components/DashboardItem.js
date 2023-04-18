import React from 'react'

function DashboardItem(props) {

    let { color , Total_revenues ,Total_trans,Total_likes,Total_users} = props;
  return (
    <div className='item' style={{background:`${color}`}}>
        
    </div>
  )
}

export default DashboardItem
