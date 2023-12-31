import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Login from '../components/login'
import Recovery from '../components/recovery.jsx'
import Confirmation from '@/components/confirmation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
      <h1 className="text-3xl font-bold underline">
  
       </h1>
       <Confirmation/>
       {/* <Recovery/> */}
      {/* <Login/> */}
      </div>
    </>
  )
}
