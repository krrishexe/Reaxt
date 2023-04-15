import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId ="907758410831-9lco8i44fomo0t1bda4oa47hqnin51ih.apps.googleusercontent.com"


function Dashboard() {

    const onSuccess =()=>{
        console.log("Logut Successful ")
    }

  return (
    <div>
      <h1>Dashboard</h1>

        <div id='signOutButton'>
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            
            
            />
        </div>

    </div>
  )
}

export default Dashboard
