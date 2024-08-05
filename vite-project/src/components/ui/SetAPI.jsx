import React, { useState } from 'react'

export default function SetAPI() {
  const [apikey, Setapikey] = useState()



  const set = () => {

    localStorage.setItem('apikey', apikey);
    window.location.reload()
  };



  return (
    <div className={`${!localStorage.getItem('apikey') ? 'block' : 'hidden'}`}>
      <div className={"bg-gray-100 p-4 flex items-center border-t"}>
        <input type="text" className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500' name="api" id="api" placeholder='Set API-key' onChange={e => { Setapikey(e.target.value) }} />
        <button className='ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500' onClick={set}><i class="fas fa-check"></i></button>
        
      </div>
      <p className='text-center'>Get Api-key <a target='blank' href="https://aistudio.google.com/app/apikey" className='text-blue-800'> Click here </a></p>
    </div>
  )
}
