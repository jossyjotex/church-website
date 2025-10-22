import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './layouts/NavBar';
import LiveStream from './pages/LiveStream';
import NewHome from './pages/NewHome';
import Give from './pages/Give';
import TheChurch from './pages/TheChurch';
import Resources from './pages/Resources';
import Footer from './layouts/Footer';
import ContactUs from './pages/ContactUs';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<NewHome/>} />
        <Route path='/live-stream' element={<LiveStream/>}/>
        <Route path='/give'element={<Give/>}/>
        <Route path='/the-church' element={<TheChurch/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
