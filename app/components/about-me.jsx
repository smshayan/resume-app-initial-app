import { title } from "process";
import { useId } from "react";
import React from "react";




const AboutMe = ({data}) => {
   
   let {title, body } = data
   let id = useId()

   return <div>
       <h2 className="mb-1">{title}</h2> 
       <hr className="w-20 mb-4 border-2 rounded-lg" />
       {body?.map((el,i) => (
        <p key={`${id}_${i}`} className="mb-4">{el}</p>
       ))}
    </div>
}

export default AboutMe ;