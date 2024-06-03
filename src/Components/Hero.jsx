import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endpoints from '../Services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.popular);
        console.log(response);
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

  return (
    <div>
   
    </div>
  );
};

export default Hero;
