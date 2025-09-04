import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numALlowed, setNumAllowed] = useState(false)
  const [charALlowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numALlowed) str += "0123456789"
    if (charALlowed) str += "!@#$%^&*-+_`~[]{}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


      setPassword(pass)
    }

  }, [length, numALlowed, charALlowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numALlowed, charALlowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numALlowed} id='numberInput' onChange={() => { setNumAllowed((prev) => !prev) }} />
              <label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charALlowed} id='numberInput' onChange={() => { setCharAllowed((prev) => !prev) }} />
              <label htmlFor='characterInput'>Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
