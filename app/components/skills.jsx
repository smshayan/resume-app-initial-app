"use client"
import React, {useState} from "react";



const Skills = ({data}) => {
   
    let [activeTab, setActiveTab] = useState("hard")
    let setBg = (active) => (activeTab === active ? "bg-yellow"  : "bg-grey")
    let {icon, text} = data

    const slider = <div className="flex mt-10 ">
       
        {["soft", "hard"].map((el) =>(
            <button
                className={`btn  hover:text-xl ease-in-out duration-1000 ${setBg(el)}`}
                key={el}
                onClick ={() => setActiveTab(el)  }
            >
                {el} skills
            </button>
    ))}
    </div>
   return <div >
       {slider}
        <div>
            <ul className="flex flex-row flex-wrap">
                {data[activeTab].map((el) =>(
                    <li className="flex flex-row p-4 m-3 ml-0 rounded-md bg-green-light hover:text-2xl ease-in-out duration-1000">
                        {el.icon}
                        {el.text}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default Skills ;