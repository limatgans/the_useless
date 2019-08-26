import React from 'react';
import './App.css';
import play from "./js/theUseless"

function App() {

  return (
    <div className="App">
      <div className="title">
        <h1>The Useless (EP)</h1>
      </div>
      <div className="subtitle">
        <h3>An Experimental EP using ToneJS</h3>
      </div>
      <button className="button play" onClick={play}>PLAY</button>
    </div>
  );
}

export default App;
