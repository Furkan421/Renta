import {React,useEffect,useState,useRef} from 'react'
import * as tt from '@tomtom-international/web-sdk-maps';

const Map = () => {
  const mapElement = useRef()
  const [maps,setmaps]=useState({})
  const Latitude=37.874641
  const Longitude=32.493156
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log(position)
  // });
  useEffect(()=>{
      let mp=tt.map({
          key:"",
          container: mapElement.current,
          center:[Longitude,Latitude],
          zoom:14
       })
       setmaps(mp)
  },[])
  return ( 
    <div ref={mapElement} className="h-[800px]" >

    </div> 
  )
 
}

export default Map