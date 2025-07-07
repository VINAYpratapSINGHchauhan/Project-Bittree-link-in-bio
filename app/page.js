"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${encodeURIComponent(text)}`)
  }
 
  return (
    <main>
      <section className="bg-[rgb(37,79,26)] flex flex-col md:grid grid-cols-2 px-[5vw] md:pt-[31vh] pt-[15vh] md:pb-[25vh] p-14" >
        <div className="content flex flex-col justify-start gap-7">
          <h1 className="md:text-7xl text-5xl font-black text-[#d2e823] ">Everything you are. In one, simple link in bio.</h1>
          <div className="btns flex  gap-2 md:py-5 ">
            <input value={text} onChange={(e) => { settext(e.target.value) }} className='bg-white text-[#867975] rounded-lg md:py-4.5 py-2.5 px-1.5 w-[43%] font-medium' type="text" placeholder="Enter your handle" />
            <button onClick={() => { createTree() }} className='cursor-pointer hover:bg-fuchsia-400 bg-[#e9c0e9] text-[#1e2341] rounded-full  md:px-7  px-2.5 font-bold'>Claim your BitTree</button>
          </div>
          <div className="lines text-white md:text-lg   text-sm font-medium">Join 70M+ people using BitTree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</div>
        </div>
        <div className="gifs hidden md:block "><img className="pl-6 h-[105%] w-[110%]" src="./home.png" alt="" /></div>
      </section>
      <section className="bg-[#e9c0e9] gap-10 flex flex-col md:grid  grid-cols-2 px-[5vw] md:pt-[25vh] p-10 " >
        <div className="gifs "><img className="pl-6 h-[100%] w-[100%]" src="./home2.png" alt="" /></div>
        <div className="content flex flex-col justify-center gap-7 ">
          <h1 className="text-5xl font-black text-[#502274] ">Create and customize your BitTree in minutes</h1>
          <div className="lines text-[#1e2341] text-sm font-medium">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</div>
          <div className="btns flex gap-2 ">
            <button className=' bg-[#502274] text-white rounded-full py-4 px-6.5 text-sm font-bold'>Get started for free</button>
          </div>
        </div>
      </section>

    </main>

  );
}
