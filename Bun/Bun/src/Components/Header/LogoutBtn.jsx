import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())  // taaki store ko pata lag jaaye ki user logout hogya.
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <button className='bg-red-300 inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default LogoutBtn
