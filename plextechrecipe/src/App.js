import logo from './logo.svg';
import './App.css';
import React from 'react';

import ClassComponent from "./components/ClassComponent"
function App() {
  return (
    <div className="App">
      <h1>Quirky Recipe</h1>
      <ClassComponent/>
    </div>
  );

}

//fetch in the app from the exported json
export default App;
