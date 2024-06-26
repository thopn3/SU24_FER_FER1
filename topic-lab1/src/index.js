import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

const nav = [
  { 'menu': 'Home' },
  { 'menu': { 'Products': ['Men', 'Women', 'Child', "Summer", "Spring"] } },
  { 'menu': { 'Brands': ['A', 'B', 'C'] } },
  { 'menu': 'Contact' },
];

const products = [
  {'id': 1, 'name': 'Iphone', 'price': 20, 'image': '1.png'},
  {'id': 2, 'name': 'Samsung', 'price': 15, 'image': '2.png'},
  {'id': 3, 'name': 'LG', 'price': 5, 'image': '3.png'}
];

root.render(
  <React.StrictMode>
    <Header />
    <Nav data={nav}/>
    <Main data={products}/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
