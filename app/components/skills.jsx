"use client"
import React, {useState} from "react";



const Skills = ({data}) => {
   
    let [activeTab, setActiveTab] = useState("soft")
    let setBg = (active) => (activeTab === active ? "bg-yellow"  : "bg-grey")

   return <div className="flex ">
       {["soft", "hard"].map((el) =>(
            <button
                className={`btn ${setBg(el)}`}
                key={el}
                onClick ={() => setActiveTab(el)  }
            >
                {el} skills
            </button>
       ))}
    </div>
}

export default Skills ;