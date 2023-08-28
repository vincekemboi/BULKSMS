import React from 'react'


const confirmation = () => {
  return (
    <div className="  bg-[url('../public/confirmation.png')] bg-cover bg-center h-screen w-screen absolute">

    <div className='transform-translate-y-1/2 absolute  lg:left-[40%] md:left-[60%] top-[50%] md:object-center'>
        <div className="text-black text-1xl font-semibold left-10  relative">Please check your email for recovery message</div>
        <div class="w-6 h-6"></div>
        <button class="w-64 h-[50px] bg-lime-600 rounded-[10px] text-gray-50 relative left-20 lg:px-0 md:px-10 sm:px-8 ">Go to Homepage</button>

    </div>
    </div>
  )
}

export default confirmation