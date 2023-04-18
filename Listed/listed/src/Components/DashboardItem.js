import React from 'react'

function DashboardItem(props) {

    let { color } = props;
  return (
    <div className='item' style={{background:`${color}`}}>
        
    </div>
  )
}

export default DashboardItem
