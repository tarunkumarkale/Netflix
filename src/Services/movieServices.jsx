const key = '107c81686b5b63fa93fd8ce1f1c4e9db'; // Enclose the API key in quotes
console.log("API Key:", key); 
const baseUrl = 'https://api.themoviedb.org/3';

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`
};

export default endpoints;

