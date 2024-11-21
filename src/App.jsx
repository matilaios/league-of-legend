import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ChampionDetailsPage from './pages/ChampionDetailsPage';
import ItemPage from './pages/ItemPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import SummonerPage from './pages/SummonerPage';
import SummonerDetailsPage from './pages/SummonerDetailsPage';



function App() {
  

  return <>
    
<BrowserRouter>

<NavBar></NavBar>

<Routes>
<Route path='/' element={<HomePage/>} />;
<Route path='/ChampionDetailsPage/:id' element={<ChampionDetailsPage/>} />;
<Route path='/item' element={<ItemPage/>}/>;
<Route path='/item/:name' element={<ItemDetailsPage/>}/>;
<Route path='/summoner' element={<SummonerPage/>}/>;
<Route path='/summoner/:id' element={<SummonerDetailsPage/>}/>;


  </Routes>

</BrowserRouter>

    </>
  
}

export default App
