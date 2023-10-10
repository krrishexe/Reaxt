import { useEffect, useState,useRef } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [initalPass, setInitalPass] = useState("")

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      pass += str.charAt([Math.floor(Math.random() * str.length + 1)])
    }
    setInitalPass(pass)

  }, [length, numAllowed, charAllowed, setInitalPass])

  const copyPassword =()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(initalPass)
  }

  const passwordRef = useRef(null) // useref hook gives you the reference of any HTML tag and it must be stored inside any variable.

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed,passwordGenerator])

  const handlePassOnChange = (e) => {
    setInitalPass(e.target.value)
  }

  const handleLengthOnChange = (e) => {
    setLength(e.target.value)
    // console.log(length)
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-900">

        <h1 className='text-2xl my-5'>Random password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input className='outline-none w-full py-1 px-3 text-center' value={initalPass} type="text" placeholder='password' id='bigInput' onChange={handlePassOnChange} ref={passwordRef} />

          <button className='outline-none bg-red-100 text-gray-900 rounded-none shrink-1' onClick={copyPassword}>Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">

            <div className="flex items-center gap-x-1">

                <input className='w-full' type="range" min={3} max={20} value={length} onChange={handleLengthOnChange}/>
                <label htmlFor="">Length : {length}</label>

            </div>
            <div className="flex items-center gap-x-1">

            <input className='w-full' type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>{
              setNumAllowed((prev) => !prev)
            }} />
            <label className='text-xl' htmlFor="numberInput">Numbers</label>

            </div>
            <div className="flex items-center gap-x-1">

            <input className='w-full '  type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>{setCharAllowed((prev) => !prev)}} />
            <label htmlFor="characterInput" className='text-xl'>Characters</label>

            </div>

        </div>


      </div>
    </>
  )
}

export default App
