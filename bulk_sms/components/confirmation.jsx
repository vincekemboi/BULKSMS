import React from 'react'


const confirmation = () => {
  return (
    <div>
    <div><img src="" alt="/public/confirmation.svg" /></div>
    <div className='transform-translate-y-1/2 absolute  left-[40%] top-[30%]'>
        <div className="text-black text-1xl font-semibold  relative">Please check your email for recovery message</div>
        <div class="w-6 h-6"></div>
        <button class="w-64 h-[50px] bg-lime-600 rounded-[10px] text-gray-50 relative left-10">Go to Homepage</button>

    </div>
    </div>
  )
}

export default confirmation