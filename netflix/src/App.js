
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Tvshows from './Components/Home/Tvshows';
import Contact from './Components/Header/Contact';



function App() {
  return (
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/movies' element={<Home/>}/>
    <Route path='/tvshows' element={<Tvshows/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
