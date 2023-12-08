import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Menu from './Menu/menu';
import Home from './Home/home';
import Footer from './Footer/footer';
import Autos from './Autos/autos';
import Information from './Inforamation/information';
import Admin_Page from './AdminPage/admin-page';
import Register from './Register/register';
import Login from './Login/login';
import Logout from './Logout/logout';
import Delete from './AdminPage/delete';
import Add_New_Car from './AdminPage/add-new-car';
import Update from './AdminPage/update';
import Buy from './Buy/buy';

function App() {
  return (
    <div className='main'>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="auto-page" element={<Autos />}></Route>
        <Route path="auto-page/information/:id" element={<Information id={":id"} />}></Route>
        <Route path="auto-page/buy/:id" element={<Buy id={":id"} />}></Route>
        <Route path="admin-page" element={<Admin_Page />}></Route>
        <Route path="register-page" element={<Register />}></Route>
        <Route path="login-page" element={<Login />}></Route>
        <Route path="logout" element={<Logout />}></Route>
        <Route path="admin-page/delete/:id" element={<Delete id={":id"} />}></Route>
        <Route path="admin-page/add-new-car" element={<Add_New_Car />}></Route>
        <Route path="admin-page/update/:id" element={<Update id={":id"} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
