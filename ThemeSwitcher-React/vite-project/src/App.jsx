import { useEffect, useState } from 'react'
import './App.css'
import {ThemeContextProvider} from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [Mode,setMode] = useState('light')

  const darkMode =() =>{
    if(Mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }

  // Actual change in theme.

  useEffect(()=>{
    const randomVar = document.querySelector('html').classList
    randomVar.remove('light' , 'dark');
    randomVar.add(Mode)

  },[Mode])
  return (
    <ThemeContextProvider value ={{Mode,darkMode}}>
    
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
