import Image from 'next/image'
import Header from '@/components/Header';
import Board from '@/components/Board';
import { useEffect } from 'react';



export default function Home() {

  return (
    <main>
      <Header/>
      <Board/>
      <h1>Hello Trello</h1>
    </main>
  )
}
