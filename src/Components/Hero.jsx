import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endpoints from '../Services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.popular);
        console.log(response.data.results);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log(randomMovie.title);
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
      <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black'>
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className='w-full h-full object-fill object-top' alt={title} />
      </div>
    </div>
   
    </div>
  );
};

export default Hero;
