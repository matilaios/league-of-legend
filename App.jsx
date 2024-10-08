import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ChampionDetailsPage from './pages/ChampionDetailsPage';



function App() {
  

  return     <>
    
<BrowserRouter>

<NavBar></NavBar>

<Routes>
<Route path='/' element={<HomePage/>} />;
<Route path='/ChampionDetailsPage/:id' element={<ChampionDetailsPage/>} />;


  </Routes>

</BrowserRouter>

    </>
  
}

export default App
