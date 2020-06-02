import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

const movies = [
  {
    title: "Matrix",
    poster:  "https://cdn.onebauer.media/one/empire-images/articles/5cd5741b133d503e3a49a5c9/matrix-reloaded.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
  },
  {
    title:  "Full Metal Jacket",
    poster:   "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
  }
]


const state = {
  greeting: 'Hello'
}

function App() {
  return (
    <div className="App">
      {state.greeting}
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}

      {/* <Movie title={movieTitles[0]} poster={movieImages[0]}/> 
      <Movie title={movieTitles[1]} poster={movieImages[1]}/> 
      <Movie title={movieTitles[2]} poster={movieImages[2]}/> 
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>                 사실 이렇게 id 없이 막 불러 오는건 좋지 않음. */}

    </div>
  );

 
  
}


export default App;
