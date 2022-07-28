import './App.css';
import NavbarTop from './components/Shared/NavbarTop';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Gallery from './components/Pages/Gallery';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
import { Routes, Route,} from "react-router-dom";
import Footer from './components/Sections/Footer';

function App() {
  return (
    <div>
      <NavbarTop /> 
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
