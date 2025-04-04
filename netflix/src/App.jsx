
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Tvshows from './Components/Home/Tvshows';
import Contact from './Components/Header/Contact';
import LandinPage from './Components/Landing Page/LandinPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';




function App() {
  return (
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/movies' element={<Home/>}/>
    <Route path='/tvshows' element={<Tvshows/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/'   element={<LandinPage/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    

  </Routes>
</BrowserRouter>
  );
}

export default App;
