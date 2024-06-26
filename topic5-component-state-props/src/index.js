import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';
import StudentList from './Student';
const root = ReactDOM.createRoot(document.getElementById('root'));

const studentData = [
  {"id":1, "name": "Nguyen", "age": 20, "major": "HE"},
  {"id":2, "name": "Hoang", "age": 19, "major": "HE"},
  {"id":3, "name": "Nam", "age": 21, "major": "BA"},
  {"id":4, "name": "Hong", "age": 22, "major": "HA"}
];

const majorData = [
  {"id": 1, "name": "HE"},
  {"id": 2, "name": "BA"},
  {"id": 3, "name": "HA"},
  {"id": 4, "name": "HS"}
];

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    <StudentList data={studentData} majorData={majorData}/>
  </React.StrictMode>
);