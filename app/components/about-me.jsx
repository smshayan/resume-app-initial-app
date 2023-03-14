import { title } from "process";
import { useId } from "react";
import React from "react";



const AboutMe = ({data}) => {
   
   let {title, body } = data
   let id = useId()

   return <div>
       <h2 className="m-">{title}</h2> 
       {body?.map((el,i) => (
        <p key={`${id}_${i}`} className="mx-">{el}</p>
       ))}
    </div>
}

export default AboutMe ;