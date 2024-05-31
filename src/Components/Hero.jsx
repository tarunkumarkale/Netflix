import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../Services/movieServices'

const Hero = () => {

const [movie,setmovie]=useState({})

useEffect(()=>{
  axios.get(endpoints.popular).then((Response)=>{
    console.log(Response)
  })
},[])
  return (
    <div>
      
    </div>
  )
}

export default Hero
