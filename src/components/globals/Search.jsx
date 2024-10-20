import React from 'react'
import {Input,Button} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='mt-3' >
        <div className='flex justify-center '>
            <Input
            isClearable
            className='max-w-lg mx-28'
            endContent={<IoSearch />}
            placeholder="Search"/>
            <Button className='font-semibold' variant="flat" radius="full">
            My Rentals
            </Button>
        </div>
    </div>
  )
}

export default Search