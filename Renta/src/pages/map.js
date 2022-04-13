import {React,useEffect,useState,useRef} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import dynamic from 'next/dynamic'
const TerminalComponent = dynamic(() => import('../components/Map'), {
    ssr: false
})


const map = () => {
  
  return (
    <>
         <Head>
            <title>Renta-Map</title>
            <meta name="description" content="Car Sharing app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='h-screen w-screen flex flex-col overflow-scroll scrollbar-hide '>
            <Navbar/>
            <TerminalComponent/>
            {/* <div ref={mapElement} className="h-[800px]">

            </div> */}
        </div>
    </>
  )
}

export default map