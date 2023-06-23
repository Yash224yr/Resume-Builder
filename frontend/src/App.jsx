import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Detail from './Detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/detail' element={<Detail/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
