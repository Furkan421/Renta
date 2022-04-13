import {React,useState} from 'react'
import {BiCar,BiCurrentLocation,BiCalendar} from "react-icons/bi"
import { HiLocationMarker ,HiUsers} from "react-icons/hi";
import Black from '../../../public/img/uberBlack.png'
import rentaBlackSuv from '../../../public/img/uberBlackSuv.png'
import rentaSelect from '../../../public/img/uberSelect.png'
import rentaX from '../../../public/img/uberX.png'
import rentaXL from '../../../public/img/uberXL.png'
import Image from "next/image";
import Link from 'next/link'
const carlist=[
  {
    name: "Mola Car",
    img:Black,
    time:"5 min away"
  },
  {
    name: "BlackSuv",
    img:rentaBlackSuv,
    time:"8 min away"
  },
  {
    name: "Renta 428",
    img:rentaSelect,
    time:"9 min away"
  },
  // {
  //   name: "Renta X",
  //   img:rentaX,
  //   time:"9 min away"
  // },
  // {
  //   name: "Renta X",
  //   img:rentaXL,
  //   time:"10 min away"
  // },

]

function Forms({title,form1,form2,page}) {
  const [isrideshow,setisrideshow]=useState(false)
  const [isSchedule,setisSchedule]=useState(false)
  const rideshow=()=>{
    setisrideshow(!isrideshow)
  }
  const Scheduleshow=()=>{
    setisSchedule(!isSchedule)
  }
  return (
    <div className='bg-[#E6E4E0] flex flex-col items-center w-full  px-2'>
      <div className='bg-[#222235] w-full p-3 mb-4'>
          <div className='flex items-center space-x-2'>
              <div className='text-xl text-white'>
                  {<BiCar/>}
              </div>
              <div className='text-xl text-white'>
                  {title}
              </div>
          </div>  
      </div>
      {/* Pickup Location form */}
      <div className='flex flex-row items-center w-full px-4 space-x-2 mb-4'>
        <div className='text-3xl text-[#222235]'>
          {<BiCurrentLocation/>}
        </div>
        <div className='flex-1'>
          <input type="text" placeholder={form1} className='form-input w-full rounded'/>
        </div>
      </div>
      {/* PinOutline */}
      {/* <div className='flex flex-row items-center w-full px-4 space-x-2'>
        <div className='text-5xl text-[#222235]'>
          {<IoPinOutline/>}
        </div>
        <div></div>
      </div> */}
      {/* Enter Destination form */}
      <div className='flex flex-row items-center w-full px-4 space-x-2 mb-4'>
        <div className='text-3xl text-[#222235]'>
          {<HiLocationMarker/>}
        </div>
        <div className='flex-1'>
          <input type="text" placeholder={form2} className='form-input w-full rounded'/>
        </div>
      </div>

       {/* Passengers form */}
       <div className='flex flex-row items-center w-full px-4 space-x-2  mb-6'>
        <div className='text-3xl text-[#222235]'>
          {<HiUsers/>}
        </div>
        <div className='flex-1'>
          <input type="number" placeholder='Passengers' className='form-input w-full rounded'/>
        </div>
      </div>
        {  isSchedule ? (<div className='flex flex-row items-center w-full px-4 space-x-2  mb-6'>
          <div className='text-3xl text-[#222235]'>
            {<BiCalendar/>}
          </div>
          <div className='flex-1'>
            <input type="date"  className='form-input w-full rounded'/>
          </div>
        </div>) : ""}
       {/* Buttons  */}
      {
        page==="ride" ? ( <div className='flex flex-row justify-between items-center w-full px-4 mb-4'>
        <a className='px-4 py-2 text-xl bg-[#222235] text-white rounded-md cursor-pointer' onClick={()=>rideshow()}>
          Request 
        </a>
        <a className='px-4 py-2 text-xl bg-[#C4C4C4] text-black rounded-md cursor-pointer' onClick={()=>Scheduleshow()}>
          Schedule
        </a>
      </div>
      ):(
        <div className='flex flex-row justify-between items-center w-full px-4 mb-4'>
          <Link href="/triplist">
            <a className='px-4 py-2 text-xl bg-[#222235] text-white rounded-md cursor-pointer'>
              Complete
            </a>
          </Link>
          <a className='px-4 py-2 text-xl bg-[#C4C4C4] text-black rounded-md cursor-pointer' onClick={()=>Scheduleshow()}>
            Schedule
          </a>
      </div>
      )
    }
    {/* Ride List */}
    <div className='flex flex-col justify-between items-center space-y-3 w-full px-4'>
      
    {
      isrideshow ? (
      carlist.map((item,idx)=>{
        return(
          <div className='flex justify-between items-center space-x-3 w-full' key={idx}>
              <Image
                src={item.img}
                className="h-14"
                height={50}
                width={50}
              />
              <div className='text-md text-[#222235] font-mono'>
                {item.name}
              </div>
              <div className='text-md text-[#222235] font-mono'>
                {item.time}
              </div>
              {/* <div className='flex flex-col '>
              </div> */}
          </div>
        ) 
      })) : ""
    }
    </div>

    </div>
  )
}

export default Forms