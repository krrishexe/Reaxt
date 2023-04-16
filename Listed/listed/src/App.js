import './Media/Styles/style.css';
import './Media/Styles/App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react'



function App() {

  const {isAuthenticated } = useAuth0();

  return (
    <div className="App">
      
    {
      isAuthenticated ? <Dashboard /> : <Login />
    }

    </div>
  );
}

export default App;
