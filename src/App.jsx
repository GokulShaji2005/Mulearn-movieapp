import { useEffect, useState } from 'react'

import './App.css'
import MovieCard from './Card.jsx';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [movies,SetMovies]=useState([])
  const [searchName,setSearchName]=useState('')
  const Movies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data= await response.json()
    SetMovies(data.Search)
  }
  useEffect(()=>{
  Movies('Spiderman')
  },[])


const movie = {
 
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
  
}
  return (
    <>
      <div className="py-8 px-4">
        <h1 className="text-center text-4xl font-bold text-purple-600 mb-8 tracking-wide">
          MovieFinder
        </h1>
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Search for movies..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
            value={searchName}
            onChange={(e)=>setSearchName(e.target.value)}
          />
          <button
            type="button"
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-sm"
            onClick={()=>Movies(searchName)}
          >
            Search
          </button>
        </div>
      </div>

      {
        movies.length > 0
        ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto mt-8">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        :
        <div>No Movies Found</div>
      }
    </>
  )
}

export default App
