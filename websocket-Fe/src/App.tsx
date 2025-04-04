import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState();
  const [message, setSetMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080")
    socket.onopen = () => {
      console.log("connected");
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log("received message: ", message.data)
      setLatestMessage(message.data)
    }

  return () => {
    socket.close()
  }

  }, [])

  if (!socket){
    return <div>
      loading...
    </div>
  }

  return (
    <>
    <input onChange={(e) => {
      setSetMessage(e.target.value)
    }} type="text" ></input>

    <button onClick={() => {
      socket.send(message)
    }}>send</button>
    {latestMessage}
    </>
  )
}

export default App
