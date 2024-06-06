import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endpoints from '../Services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState({});
  const[overviewLength,setoverviewLength]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.popular);
        console.log(response.data.results);
        const movies = response.data.results;
     
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log(randomMovie.title);
        if (randomMovie.overview.length > 200) {
          setoverviewLength(randomMovie.overview.slice(0, 150) + '...');
        } else {
          setoverviewLength(randomMovie.overview);
        }
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);





if(!movie){
  return<div>
    loading ....
  </div>
}

const {title,backdrop_path,release_date,overview}=movie

  return (
    <div className='w-full h-[550px]  lg:h-[850px]'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[550px]  lg:h-[850px] bg-gradient-to-r from-black'>
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className='w-full h-full object-cover object-top' alt={title} />

        <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8 '>
          <h1  className='text-3xl md:text-6xl fonr-nsans-bold'>{title}</h1>
          <div>
            <button className='capitalize border bg-red-600 text-black py-2 px-5'>play</button>
            <button className='capitalize border  border-gray-300 py-2 px-5'> watch later</button>
          </div>
          <p className='text-gray-200 text-lg  underline'>{release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-xl'>{overviewLength}</p>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default Hero;
