// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>



      </div>
    </>
  );
}

export default App;
