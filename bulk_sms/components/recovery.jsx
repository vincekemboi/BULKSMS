import React from 'react'



const recovery = () => {
  return (
    <div className="bg-[url('../public/recovery.png')] h-screen w-screen bg-cover">
    <div className="transform-translate-y-1/2 absolute  left-[45%] top-[40%]  " > 
    {/* //style={{ backgroundImage: "url('/recovery1.png')" }} */}
        <div class="w-[338.65px] h-[44.44px] text-black text-[25px] font-semibold relative left-6">Recover your account</div>

      <div class="w-[699.60px] h-[104.56px] relative">
        <input class="w-96 h-8 left-70 top-20 opacity-70 text-slate-950 text-sm font-normal relative rounded-lg border border-zinc-600" placeholder='example@gmail.com'/>
         <label class="w-[144.94px] h-[28.75px]  right-0 relative text-black text-base font-normal">Email Address</label>
      </div>
      <div class="w-[699.60px] h-[65.35px] relative">
  <button class="w-96 h-[28.75px] left-70 top-[18.30px]  bg-lime-600 rounded-[10px] text-gray-50 text-base font-semibold relative">Reset Your Password</button>
</div>
    </div>
    </div>
  )
}

export default recovery