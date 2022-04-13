import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from "next/image";
import rentaSelect from '../../public/img/uberSelect.png'
import dynamic from 'next/dynamic'
const TerminalComponent = dynamic(() => import('../components/Map'), {
  ssr: false
})
const trips=[
  {
    date:"11/04",
    trip:"Meram-Bosna",
    status:"Waiting"
  },
  {
    date:"08/04",
    trip:"Selçuk-Kule",
    status:"Complete"
  },
  {
    date:"04/04",
    trip:"Selçuk-Kule",
    status:"Complete"
  },
  {
    date:"01/04",
    trip:"Konya-Ankara",
    status:"Complete"
  },
  {
    date:"18/03",
    trip:"Izmir-Ankara",
    status:"Complete"
  },
  {
    date:"20/03",
    trip:"Ankara-Izmir",
    status:"Complete"
  },
  {
    date:"22/03",
    trip:"Ankara-Izmir",
    status:"Complete"
  },
  {
    date:"24/03",
    trip:"Ankara-Konya",
    status:"Complete"
  },
  {
    date:"14/02",
    trip:"Selçuk-Kule",
    status:"Complete"
  },
  {
    date:"10/02",
    trip:"Kule-Meram",
    status:"Complete"
  },
]
const triplist = () => {
  return (
    <div>
         <Head>
            <title>Renta-Ridelist</title>
            <meta name="description" content="Car Sharing app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className='h-screen w-screen flex flex-col overflow-scroll scrollbar-hide '>
          <Navbar/>
          <div className='flex flex-col md:flex-row items-center h-full w-full'>
              <div className='h-full w-full'>
                <div className='mt-6 container flex flex-col justify-between items-center space-y-6 w-full'>
                    <div className='w-full px-6'>
                        <input type="text" placeholder="Search your trips " className="form-input w-full"/>
                    </div>
                    <div className='flex flex-col justify-between items-center space-y-2 w-full'>
                          {
                            trips.map((item,idx)=>{
                              return (
                                <div className='flex justify-between items-center w-full px-6' key={idx}>
                                    <Image
                                      src={rentaSelect}
                                      className="h-14"
                                      height={50}
                                      width={50}
                                    />
                                    <div  className='flex flex-col items-center'>
                                        <div className='text-md font-mono'>
                                          {item.trip}
                                        </div>
                                        <div className='text-md font-serif'>
                                        {item.date}
                                        </div>
                                    </div>
                                    {
                                      item.status === "Complete" ? (
                                        <div className='bg-green-400 px-4 py-2 rounded-md text-white'>
                                          {item.status}
                                        </div>
                                      ) : (
                                        <div className=' bg-yellow-200 px-4 py-2 rounded-md text-[#222235]'>
                                          {item.status}
                                        </div>
                                      )
                                    }
                                    
                                </div>
                              )
                            })
                          }
                    </div>
                </div>
              </div>
              <div className='bg-black h-full w-full hidden md:block'>
                  <TerminalComponent/>
              </div>
          </div>
         </div>
    </div>
  )
}

export default triplist