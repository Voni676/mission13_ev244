// This is the page that lists out the movies in table form imported from the MovieData.json file

import data from "./MovieData.json"

const movieData = data.MovieData;

function MovieList () {

  return (
    <>
    <div>
      <h3>Joel Hilton's Movie Collection</h3>
    </div>

    <div>
       <table className="table">
          <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
            ))}
           
          </tbody>
      </table>
    </div>
   
    </>

  );
}

export default MovieList;