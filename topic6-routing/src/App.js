import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Contact, Header, Home, Information } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact name="Ngoc Hoang" age="1000"/>}/>
          <Route path='/info/:n/and/:a' element={<Information/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
