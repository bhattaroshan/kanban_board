'use client'
import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NAVBAR_HEIGHT } from '@/config/constants';

function Header() {
  return (
    <header className={`flex flex-col md:flex-row items-center justify-center bg-blue-500 p-5 space-y-4 w-screen fixed z-50 h-${NAVBAR_HEIGHT}`}>
            <div className='flex items-center justify-center font-bold text-white space-x-2 text-2xl'>
                <Image
                    src='https://img.icons8.com/?size=512&id=W4exQ45gyKkC&format=png'
                    alt='Trello Image'
                    width={100}
                    height={50}
                    className='w-20 object-contain'
                />
                <p>ENROL</p>

            </div>
            <div className='flex space-x-5 flex-1 justify-end w-full items-center '>
                {/* Search Box */}
                <form className='flex items-center space-x-5 bg-white p-2 rounded-md shadow-md flex-1 md:flex-initial'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                    <input type='text' placeholder='Search' className='flex-1 outline-none p-2'/>
                    <button type='submit' hidden>Search</button>
                </form>

                {/* Avatar */}
                <Avatar>
                    <AvatarFallback>RB</AvatarFallback>
                </Avatar>
            </div>
        {/* </div> */}

    </header>
  )
}

export default Header