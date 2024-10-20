import React, { useState } from 'react'
import { IoIosArrowBack , IoIosArrowForward} from "react-icons/io";



function Slider({slides}) {

    let [current, setCurrent]=useState(0);

    let previousSlide=()=>{
        if(current ===0) setCurrent(slides.length - 1)
        else setCurrent(current - 1);
    }
        
    let nextSlide=()=>{
        if(current ===slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }
        
  return (
    <div className='overflow-hidden relative mt-4'>
        <div className={`flex transition ease-out duration-400 rounded-2xl`}
        style={{transform:`translateX(-${current*100}%)`}}
        >
            {slides.map((img,index)=>{
                return <img className='rounded-2xl' key={index} src={img} alt="" />
            })}
        </div>

        <div className='absolute top-0 h-full items-center w-full justify-between flex text-white font-extrabold text-4xl'>
            <div className='hover:cursor-pointer' onClick={previousSlide }>
                <IoIosArrowBack />
            </div>
            <div className='hover:cursor-pointer' onClick={nextSlide}>
                <IoIosArrowForward />
            </div>
        </div>
        
        <div className='flex justify-center mt-3'>
            <div className='bg-slate-300 flex py-1 px-2 rounded-3xl gap-1'>
                {
                    slides.map((img, index)=>
                         <button className={` h-2 w-2 rounded-full hover:cursor-pointer ${index ===current ? "bg-gray-500":"bg-gray-400"}`}
                         key={index} 
                         onClick={()=>{setCurrent(index)}}>
                         </button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Slider