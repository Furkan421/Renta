import Head from 'next/head'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// bg-[#3C3C59]
export default function Home() {
  return (
    <>    
        <Head>
            <title>Renta</title>
            <meta name="description" content="Car Sharing app" />
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        <div className='h-screen w-screen flex flex-col overflow-scroll scrollbar-hide '>
          <Navbar/>
          <Hero/>
          <Footer/>
        </div> 
    </>
  )
}

