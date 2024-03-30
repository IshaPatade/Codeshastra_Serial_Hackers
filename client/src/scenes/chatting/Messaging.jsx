import React from 'react'
import { Link } from 'react-router-dom'
import message from "../../assets/msgicon.png"

const Messaging = () => {
  return (
    <div className='bottom-0 absolute right-0 w-36 z-30'>
      <Link to="/messaging"><button className="mt-1 tracking-wide font-semibold bg-[#5f3e82] text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <span className="ml-3">Message</span>
            <img className="w-8 mx-4" src={message} alt="" />
          </button></Link>
    </div>
  )
}

export default Messaging
