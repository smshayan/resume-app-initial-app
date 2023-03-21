import { useId } from "react";
import React from "react";
import Image from "next/image";





const Portfolio = ({data}) => {
   
  let { body } = data
   return <div >
      <div className="flex flex-col text-center items-center mt-10 ">
        <h2 className="mb-1">Portfolio</h2>
        <hr className="w-20 border-2 rounded-lg" />
        
      </div>

      <div className="flex flex-row justify-center">
        {body?.map((el) => (
          <a href={el.link}>
          <div className="flex flex-col text-center items-center m-8">
            <Image
                  priority
                  width={75}
                  height={75}
                  src={el.icon}
                  className="m-1 rounded-2xl shadow-lg shadow-grey hover:shadow-black ease-in-out duration-300"
              />
              <p className="font font- text-lg mt-1 ">{el.text}</p>
          </div>
          </a>
        ))}
      </div>
    </div>
}

export default Portfolio ;