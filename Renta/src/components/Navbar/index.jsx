import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {HiTranslate,HiOutlineUser} from "react-icons/hi"
import Image from "next/image";
import metamask from '../../../public/img/metamask.svg'
function Navbar() {
  const { asPath, pathname } = useRouter();
  return (
    <div className='flex bg-[#222235] w-full h-36 space-y-2 flex-col  lg:h-14 lg:flex-row  justify-between items-center px-8 z-50 top-0'>
            <div className='text-white text-3xl cursor-pointer'>
                Renta
            </div>
            <div className='flex flex-row justify-between cursor-pointer space-x-12'>
                <Link href="/">
                    <a className={`text-xl ${asPath === "/" ? "text-white" :"text-gray-500" }   hover:shadow-md hover:text-gray-200`}>Home</a>
                </Link>
                <Link href="/ride">
                    <a className={`text-xl ${asPath === "/ride" ? "text-white" :"text-gray-500" }   hover:shadow-md hover:text-gray-200`}>Ride</a>
                </Link>
                <Link href="/drive">
                    <a className={`text-xl ${asPath === "/drive" ? "text-white" :"text-gray-500" }   hover:shadow-md hover:text-gray-200`}>Drive</a>
                </Link>
                <Link href="/map">
                    <a className={`text-xl ${asPath === "/map" ? "text-white" :"text-gray-500" }   hover:shadow-md hover:text-gray-200`}>Map</a>
                </Link>
            </div>
            <div className='flex flex-row  cursor-pointer space-x-6'>
                <div className='flex flex-row items-center text-white space-x-2'>
                    <HiTranslate className='texts-md'/>
                    <div>
                        EN
                    </div>
                </div>
                <div>
 
                <Image src={metamask} height={40} width={40} alt="metamask"/>
                </div>
                {/* // <div className='flex flex-row items-center text-white space-x-2'>
                //     <HiOutlineUser className='texts-md'/>
                //     <div>
                //         Login
                //     </div>
                // </div> */}
            </div>
    </div>
  )
}

export default Navbar