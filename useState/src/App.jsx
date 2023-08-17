import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom";
import { Favorite_Color } from './assets/Components/useState/FavoriteColor';
import { SayHello } from './assets/Components/useState/SayHello';
import { Calculator } from './assets/Components/useState/Calculator';

function App() {

  return (
    <>
      <Favorite_Color/>
      <SayHello/>
      <Calculator/>
    </>
  )
}

export default App
