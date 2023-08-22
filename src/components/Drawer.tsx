import React,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge';
import { NAVBAR_HEIGHT } from '@/config/constants';

interface DrawerProps{
    className:string;
}

function Drawer({className}:DrawerProps) {

    const menuItems = [
        {name:'Dashboard'},
        {name:'Roles'},
        {name:'Settings'},
    ]

  return (
    <div className={`${twMerge(``,className)}`}>
        <ul className='flex flex-col text-lg'>
            {
                menuItems.map((item,index)=>{
                    return <li className='border p-2 pl-4 bg-gray-100 hover:bg-gray-200'>{item.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Drawer;