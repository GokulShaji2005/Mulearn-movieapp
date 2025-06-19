import React from "react";


const MovieCard = ({ movie }) => {
  return (
    <div className="relative flex flex-col h-80 sm:h-96 w-full max-w-xs mx-auto">
      <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
        {movie.Year}
      </span>
      <div className="rounded-lg overflow-hidden shadow-lg flex-1 flex">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-purple-600 rounded-b-sm text-white font-bold p-2 flex flex-col justify-between min-h-[64px]">
        <span className="text-xs uppercase">{movie.Type}</span>
        <div className="truncate">{movie.Title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
