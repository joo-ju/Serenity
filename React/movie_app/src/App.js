import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <Movie/>                 {/* 사실 이렇게 id 없이 막 불러 오는건 좋지 않음. */}

    </div>
  );
}

export default App;
