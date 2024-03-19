import {useContext} from 'react'
import UserContext from '../context/UserContext'
import { useRecoilValue } from 'recoil'
import {userEmail} from "../store/selectors/userEmail"
import {userPassword} from "../store/selectors/userPassword"

function Profile() {

    // const {user} = useContext(UserContext)
    const userEm = useRecoilValue(userEmail)
    const userPass = useRecoilValue(userPassword)
    console.log(userEm,userPass)
  
    if(!userEm){
        return <div>Please Login</div>
    }
    else{
        return <>
        <div>welcome {userEm}</div><div>{userPass} is your password</div>
        </>
    }
}

export default Profile
