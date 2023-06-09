import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Characters from "./screens/Characters"
import Choice from './screens/Choice'
import Home from './screens/Home'
import CardFilter from './components/Cardfilter'
import './App.css'

const App = () => {
  return ( 
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/carfilter/:sexe/:homeworld/:species' element={<CardFilter/>} />
      <Route path="/characters" element={<Characters/>} />
    </Routes>
  </>
);
}

export default App;
