'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [ socket, setSocket ] = useState<WebSocket | null>()
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick () {
    if(!socket || !inputRef.current){
      return;
    }
    const message = inputRef.current.value;
    socket.send(message)
  }


  useEffect(() => {
      const ws = new WebSocket("ws://localhost:8080")
      setSocket(ws)

      ws.onmessage = (e) => {
        alert(e.data)
      }
      
  }, [])
  
  return (
    <div className='h-screen w-screen flex justify-center items-center'>

      <input ref={inputRef} className='border border-gray-800' type="text" placeholder='message' />
      <button 
      className='cursor-pointer border border-gray-800 py-1.5 px-3'
      onClick={handleClick}>Send</button>
    </div>
  )
}