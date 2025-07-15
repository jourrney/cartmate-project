import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home />;
    </BrowserRouter>
  ); 
}

export default App;
