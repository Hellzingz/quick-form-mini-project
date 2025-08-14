

function MovieItem({ title, selected, onSelect }) {


  return (
    <label>
        <input
            type="radio"
            name="movie"
            checked={selected}
            onChange={onSelect}
          />
          {title}
    </label>
  )
}

export default MovieItem