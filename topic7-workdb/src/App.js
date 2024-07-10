import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './components/detail';
import AddProduct from './components/add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Home/>} />
        <Route path='/product/:pId' element={<Detail/>} />
        <Route path='/product/add' element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
