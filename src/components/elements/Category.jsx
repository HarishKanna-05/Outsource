import React from 'react'
import {Button} from "@nextui-org/react";
import { HiSquaresPlus } from "react-icons/hi2";
import { IoCarSportSharp,IoLaptopOutline } from "react-icons/io5";
import { GiAmpleDress } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { div } from 'framer-motion/client';



function Category() {
  return (
    <div>
        <div className='flex  justify-center mt-4'>
            <Button className='mx-2 font-semibold' variant="flat" radius="secondary" startContent={<div className='text-xl'><HiSquaresPlus/></div>}>
                All
            </Button>
            <Button className='mx-2 font-semibold' variant="flat" radius="secondary" startContent={<div className='text-xl'><BsTools/></div>}>
                Hardware
            </Button>
            <Button className='mx-2 font-semibold' variant="flat" radius="secondary" startContent={<div className='text-xl'><IoLaptopOutline/></div>}>
                Gadgets
            </Button>
            <Button className='mx-2 font-semibold' variant="flat" radius="secondary" startContent={<div className='text-xl'><IoCarSportSharp/></div>}>
                Vehicle
            </Button>
            <Button className='mx-2 font-semibold' variant="flat" radius="secondary" startContent={<div className='text-xl'><GiAmpleDress/></div>}>
                Clothing
            </Button>
        </div>
    </div>
  )
}

export default Category