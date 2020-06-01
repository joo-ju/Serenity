import React from 'react';
import './Movie.css';


function Movie() {
    return (
        <div>
        <MoviePoster/>
        <h1>hello this is a movie</h1>
        </div>
    );
  }


  
function MoviePoster() {
    return (
        <img src="http://genomecom.co.kr/wp-content/uploads/2015/05/img28.jpg"/>
    );
  }

// class Movie extends Component{
//     render() {
//         return(
//         <h1>hello this is a movie</h1>
//         )
//     }
// }

export default Movie 