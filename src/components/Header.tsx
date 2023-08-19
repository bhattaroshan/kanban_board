'use client'
import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center bg-gray-500/10 p-5 rounded-b-2xl'>
            <Image
                src='https://img.icons8.com/?size=512&id=21049&format=png'
                alt='Trello Image'
                width={100}
                height={50}
                className='w-20 md:w-16 pb-10 md:pb-0 object-contain'
            />
            <div className='flex space-x-5 flex-1 justify-end w-full'>
                {/* Search Box */}
                <form className='flex items-center space-x-5 bg-white p-2 rounded-md shadow-md flex-1 md:flex-initial'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                    <input type='text' placeholder='Search' className='flex-1 outline-none p-2'/>
                    <button type='submit' hidden>Search</button>
                </form>

                {/* Avatar */}
                <Avatar name='Roshan Bhatta' round color='#0055D1' size='50'/>
            </div>
        </div>

        <div className='flex items-center justify-center px-5 py-2 md:py-5'>
            <p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit py-2'>
                <UserCircleIcon className='inline-block text-[#0055D1] mr-1 w-10 h-10'/>
                GPT is summerizing your task for the day
            </p>
        </div>
    </header>
  )
}

export default Header