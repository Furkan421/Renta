import React from 'react'
import Head from 'next/head'
// import Map from '../components/Map'
import Navbar from '../components/Navbar'
import map from '../../public/img/map.png'
import Image from "next/image";
import Forms from '../components/Forms';
import dynamic from 'next/dynamic'
const TerminalComponent = dynamic(() => import('../components/Map'), {
  ssr: false
})
function ride() {
  return (
    <>
        <Head>
            <title>Renta-Ride</title>
            <meta name="description" content="Car Sharing app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='h-screen w-screen flex flex-col overflow-scroll scrollbar-hide '>
          <Navbar/>
          {/* <TerminalComponent/> */}
          <div className='relative flex-1 h-[800px]'>
            {/* <Image src={map}  layout="fill" objectFit='cover'/> */}
            <TerminalComponent/> 
            <div className='absolute top-32 lg:top-18 w-full lg:w-1/3 lg:ml-6'>
              <Forms title={"Ride"} form1={'Enter Pickup Location'} form2={'Enter Destination'} page="ride"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default ride