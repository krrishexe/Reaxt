import { useState, useContext } from 'react'
import userContext from '../context/UserContext'
import { userState } from '../store/atoms/User'
import { useSetRecoilState } from 'recoil'
function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // How to send data ?
    // Ans.
    // const { setUser } = useContext(userContext)
    const setUser = useSetRecoilState(userState)

    const handleOnClick = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <input type="text" placeholder=' username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <input type="submit" onClick={handleOnClick} value={"Submit"} />
        </div>
    )
}

export default Login
