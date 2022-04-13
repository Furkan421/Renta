import React from 'react'
import {BiRocket,BiMapAlt,BiHappyHeartEyes} from "react-icons/bi";

function Footer() {
  return (
    <div className='w-full  flex flex-col justify-between items-center space-y-6 mt-6 lg:mt-0'>
        <div className='text-2xl font-bold font-mono'>
            Why choose US
        </div>
        <div className='px-4 grid grid-rows-3 lg:grid-rows-1 grid-flow-col gap-4 w-screen '>
            <Card title={"Fast and Easy Booking"} icon={<BiRocket/>}/>
            <Card title={"Many Pickup Location"} icon={<BiMapAlt/>}/>
            <Card title={"Satisfied Customers"} icon={<BiHappyHeartEyes/>}/>
        </div>
    </div>
  )
}


function Card({title,icon}) {
  return (
    <div className='bg-[#222235] flex flex-col items-center w-full p-4 space-y-4 h-full rounded-md'>
        <div className='text-6xl font-semibold text-white'>
            {icon}  
        </div>
        <div className='text-2xl font-semibold text-white'>
            {title}
        </div>
    </div>
  )
}

export default Footer