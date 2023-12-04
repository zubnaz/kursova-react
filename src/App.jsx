import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Menu from './Menu/menu';
import Home from './Home/home';
import Footer from './Footer/footer';
import Autos from './Autos/autos';

function App() {
  return (
    <div className='main'>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="auto-page" element={<Autos />}></Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
