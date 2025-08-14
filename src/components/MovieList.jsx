import MovieItem from './MovieItem';
import AlertText from "./Tag/AlertText"
import {movies} from "../data/movies"

function MovieList({selectedTitle,setSelectedTitle,error,submitted}) {
    


    
  return (
    <section className='flex flex-col mt-5'>
    <h2 className='text-xl text-center'>Choose Favorite Movie</h2>
    {movies.map((movie) => (
        <MovieItem
          key={movie.title}
          title={movie.title}
          selected={selectedTitle === movie.title}
          onSelect={() => setSelectedTitle(movie.title)}
        />
      ))}
      {error.selectedTitle && !submitted && <AlertText>{error.selectedTitle}</AlertText>}
    </section>
  )
}

export default MovieList