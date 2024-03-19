import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import { RecoilRoot } from 'recoil'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world</h1>
      <RecoilRoot>
        <Login />
        <Profile />
      </RecoilRoot>
    </>
  )
}

export default App
