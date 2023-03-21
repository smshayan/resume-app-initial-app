import React from "react";
import Image from "next/image";
import Link from "next/link";

let Sidebar = ({data}) => {

    let {name, role, education} = data 
    
    return <div className="bg-black text-white text-center flex flex-col h-screen content-between w-full lg:w-1/3 md:w-1/2 sm:w-1/2 sm:justify-around">
        <div className="flex flex-col p-10 items-center" >
            <Image
                priority
                width={300}
                height={300}
                src='/images/profile.jpg'
                className=" flex rounded-full mb-5 hover:shadow-grey shadow-lg ease-in-out duration-300"
            />
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{education[0]}</p>
            <p>{education[1]}</p>
            <div>
                <h3 className="mb-2">Contact Me</h3>
                <div>
                    <a className="m-2" href="https://twitter.com/smshayan_eth">🐦</a>
                    <a className="m-2" href="https://www.linkedin.com/in/sm-shayan-118130219/">🗄️</a>
                    <a className="m-2"href="https://www.instagram.com/smshayan_insta/">❤️</a>
                    
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar;