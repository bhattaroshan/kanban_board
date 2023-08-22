import Image from 'next/image'
import Header from '@/components/Header';
import Board from '@/components/Board';
import { useEffect } from 'react';
import Kanban from '@/components/Kanban';
import { DashboardNav } from "@/components/nav"
import { SidebarNavItem } from '@/types';
import Drawer from '@/components/Drawer';

const sidebarNav:SidebarNavItem[] = [
  {
    title: "Posts",
    href: "/dashboard",
    icon: "post",
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: "billing",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "settings",
  },
];

export default function Home() {

  return (
    <main>
          <Kanban/>
     
    </main>
  )
}
