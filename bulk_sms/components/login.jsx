import React from 'react'


const login = () => {
  return (
   <div class="  bg-[url('../public/login.svg')] bg-cover bg-center h-screen w-screen absolute">
    
    <div >
      
    <div className=" lg:w-2 lg:h-20 left-20 text-white text-9xl font-bold leading-[131px] relative">Effortlessly scale your business comms.</div>
    <div class=" lg:left-[70%] md:left-60 transform-translate-x-1/2 top-[20%] transform-translate-y-1/2 absolute flex flex-col justify-start items-start gap-4">
    <img src="https://i.ibb.co/F7PNmg4/logo-removebg-preview-2-removebg-preview.png" alt="logo-removebg-preview-2-removebg-preview" border="0" className="w-40 h-8 relative left-16" />
   
     <h1 className='text-semibold relative left-32'>Login</h1>
        <div class="flex flex-col justify-start items-start gap-2">
            <label for="email" class="text-stone-900 text-base font-medium leading-[10px]">Email</label>
            <input type="email" id="email" name="email" class="w-[300px]  h-10 px-5 py-3.5 rounded-lg border border-zinc-600" placeholder="Enter your email"/>
        </div>
        <div class="flex flex-col justify-start items-start gap-2">
            <label for="password" class="text-stone-900 text-base font-medium leading-[10px]">Password</label>
            <input type="password" id="password" name="password" class="w-[300px] h-10 px-5 py-3.5 rounded-lg border border-zinc-600 flex items-center" placeholder="Enter your password"/>
            <div class="w-6 h-1"></div>
        </div>
        <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
                <input type="checkbox" class="w-3.5 h-3.5 rounded border border-black"/>
                <span class="text-black text-xs font-medium leading-tight">Remember me</span>
            </label>
            <a href="#" class="text-black text-xs font-medium leading-tight">Forgot Password</a>
        </div>
        <button class="w-[300px] h-10 px-5 py-3.5 bg-lime-600 rounded-lg text-neutral-50 text-sm font-semibold leading-[19px]">Sign in</button>
        <div class="text-black text-sm font-semibold leading-[19px] relative left-40">Or</div>
        <button class="w-[300px] h-10 px-5 py-3.5 rounded-lg border border-zinc-600 flex items-center gap-2">
            <img class="w-[18px] h-[18px] relative left-10" src=" https://img.icons8.com/?size=1x&id=17949&format=png" alt="Google Logo"/>
            <span class="text-zinc-900 text-sm font-semibold leading-[19px] relative left-12">Sign in with Google</span>
        </button>
    </div>
</div>

   </div>


  )
}

export default login