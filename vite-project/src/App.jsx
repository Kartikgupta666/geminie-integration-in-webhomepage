import { useState } from 'react'
import Botreply from './components/ui/Botreply'
import Userchat from './components/ui/Userchat'
import axios from 'axios'
import SetAPI from './components/ui/SetAPI'

function App() {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])



  const send = async (e) => {
    e.preventDefault()
    setChat([...chat, { type: 'user', text: message }])
    setMessage("")

    await axios.post("https://geminie-integration-in-webhomepage.onrender.com/", {
      message: message,
      apikey: localStorage.getItem('apikey')

    })
      .then((res) => {
        const result = res.data
        setChat(prevChat => [...prevChat, { type: 'bot', text: result }])
      }).catch(e => {
        console.log(e)
      })
  }

  const Delete = () => {
    localStorage.removeItem('apikey');
    window.location.reload()
  }

  return (
    <>
      <div class="flex flex-col h-screen">

        {/* <!-- Header --> */}
        <header class="bg-blue-600 text-white text-center p-4 fixed w-full top-0 z-10 flex justify-between">
          <h1 className='text-xl'>Chatbot</h1>
          <button className="bg-red-600 text-white py-2 px-4 rounded" onClick={Delete}><i class="fas fa-trash-alt"></i></button>

        </header>

        {/* <!-- Main Content --> */}
        <main class="flex-grow mt-16 mb-16 overflow-hidden flex flex-col">
          {/* <!-- Chat Area --> */}
          <div class="flex-grow overflow-y-auto p-4 bg-gray-100">

            <SetAPI />

            {/* <!-- Dynamic Chat Messages --> */}
            <div className="space-y-px">
              {chat.map((entry, index) => (
                entry.type === 'user' ?
                  <Userchat key={index} command={entry.text} /> :
                  <Botreply key={index} reply={entry.text} />
              ))}
            </div>
          </div>

          {/* <!-- Chatbox --> */}
          <div class="p-4 bg-white shadow fixed bottom-0 w-full flex">
            <input type="text" class="flex-grow border rounded p-2 mr-2" placeholder="Type your message..." value={message} onChange={e =>{setMessage(e.target.value)}} />
            <button class="bg-blue-600 text-white p-2 rounded" onClick={send}>Send</button>
          </div>
        </main>
      </div>

    </>
  )
}

export default App
