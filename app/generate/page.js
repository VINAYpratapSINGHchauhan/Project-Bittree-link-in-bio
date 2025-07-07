"use client"
import Link from 'next/link';
import { useState } from 'react';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const generate = () => {

    const searchparam = useSearchParams();
    const router=useRouter();

    const [Links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchparam.get('handle'))
    const [pic, setpic] = useState("")

    const handleChange = (index, linktext, link) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { linktext, link }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLinks = () => {
        setLinks(Links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": Links,
            "handle": handle,
            "pic": pic
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/add", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    toast.success(result.message);
                    setLinks([{ link: "", linktext: "" }]);
                    setpic("");
                    sethandle("");
                    router.push(`/${encodeURIComponent(handle)}`)
                } else {
                    toast.error(result.message);
                }
            })
            .catch((error) => console.error(error));
    }

    return (<>
        <ToastContainer />
        <div className="generate min-h-screen overflow-x-hidden  bg-[#F6F1DA] flex flex-col md:grid grid-cols-2 h-full ">
            <div className="col1 flex flex-col  px-[8vw] md:pt-[25vh] pt-[20vh]">

                <h1 className='text-5xl font-bold'>Create Your BitTree</h1>

                <div className="input flex-col flex my-7 gap-2">

                    <h2 className='font-semibold text-sm'>Step 1 : Claim your Handle</h2>
                    <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='w-[88%] mx-auto px-4 py-2 focus:outline-pink-900 bg-white rounded-2xl' type="text" placeholder='Choose a handle' />

                    <h2 className='font-semibold text-sm'>Step 2 : Add Links</h2>
                    {Links && Links.map((item, index) => {
                        return <div key={index} className='flex gap-2 ' >
                            <input value={item.linktext || ""} onChange={e => { handleChange(index, e.target.value, item.link) }} className='w-[88%] mx-auto px-4 py-2 focus:outline-pink-900 bg-white rounded-2xl' type="text" placeholder='Enter link text' />
                            <input value={item.link || ""} onChange={e => { handleChange(index, item.linktext, e.target.value) }} className='w-[88%] mx-auto px-4 py-2 focus:outline-pink-900 bg-white rounded-2xl' type="text" placeholder='Enter link' />
                        </div>
                    })}
                    <button onClick={() => { addLinks() }} className=' bg-[#502274] hover:bg-[rgb(30,35,48)] w-fit  text-white rounded-full py-2 px-3.5 text-sm font-bold'>+ Add Links</button>
                    <h2 className='font-semibold text-sm'>Step 3 : Add Picture and Finalize</h2>
                    <input value={pic} onChange={e => { setpic(e.target.value) }} className='w-[88%] mx-auto px-4 py-2 focus:outline-pink-900 bg-white rounded-2xl' type="text" placeholder='Enter link to your picture' />
                    <button disabled={pic == "" || handle == "" || !Links[0] || Links[0].linktext === ""} onClick={() => { submitLinks() }} className=' bg-[#502274] hover:bg-[rgb(30,35,48)] mx-auto disabled:bg-gray-500 text-white rounded-full py-2 px-3.5 text-sm font-bold w-fit'>Create your BitTree</button>
                </div>
            </div>
            <div className="col2"><img src="https://assets.production.linktr.ee/auth/3289/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="Promotional Banner" className="max-h-screen w-full object-cover hidden md:block" />
            </div>
        </div>
    </>
    )
}

export default generate
