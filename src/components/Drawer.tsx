'use client'
import React,{ReactNode,useState} from 'react'
import { twMerge } from 'tailwind-merge';
import { NAVBAR_HEIGHT } from '@/config/constants';
import { SettingsIcon, DashboardIcon } from './ui/icons';

interface DrawerProps{
    className?:string;
}

function Drawer({className}:DrawerProps) {

    const [drawerIndex,setDrawerIndex] = useState(0);

    const menuItems = [
        {name:'DASHBOARD',icon:<DashboardIcon/>},
        {name:'ROLES',icon:<SettingsIcon/>},
        {name:'SETTINGS',icon:<DashboardIcon/>},
    ]

  return (
    <div className={`${twMerge(`border-r-2 cursor-pointer`,className)}`}>
        <ul className='flex flex-col text-lg'>
            {
                menuItems.map((item,index)=>{
                    return <li className={`border-b p-2 pl-4 hover:${index!==drawerIndex && 'bg-gray-200'} ${index===drawerIndex?'bg-blue-400 text-white':'bg-gray-100 text-black'}`}
                        onClick={()=>setDrawerIndex(index)} 
                    >
                        <div className='flex gap-4'>
                            {item.icon}
                            {item.name}
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Drawer;