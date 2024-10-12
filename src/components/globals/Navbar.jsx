import React from 'react'
import { Autocomplete, AutocompleteItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu ,DropdownItem } from "@nextui-org/react"
import { location } from "./data/location.js"
import {Button} from "@nextui-org/react";
import { IoIosMenu } from "react-icons/io";



function Navbar() {
  return (
    <div>
        <div className='flex justify-between items-center mx-8 border-b-1 '>
            <div className='flex items-center space-x-5'>
                <img className='h-[60px]' src="../src/assets/logo.png" alt="" />
                <div>
                    <Autocomplete
                    defaultItems={location}
                    placeholder="Search an location"
                    className="max-w-xs"
                    aria-label="Location Search"
                    >
                    {(location) => <AutocompleteItem key={location.value}>{location.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div>
                    <Button className='font-semibold' variant="flat" radius="full">
                    <img className='w-[25px]' src="../src/assets/lend.svg" alt="" />Lend It
                    </Button>
                </div>
                <div>
                    <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="user">User</DropdownItem>
                        <DropdownItem key="privacy">Privacy</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                        Log Out
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button isIconOnly color="#ffffff" aria-label="Like">
                            <IoIosMenu className='w-[30px] h-[30px]' />
                        </Button>    
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Menu Actions" variant="flat">
                        <DropdownItem key="settings">Settings</DropdownItem>
                        <DropdownItem key="theme">Theme</DropdownItem>
                        <DropdownItem key="complain">Complain</DropdownItem>
                        <DropdownItem key="aboutus" >
                        About Us
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar