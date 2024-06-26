import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent, { Hello } from './MyComponent';
import Section, { Button } from './components/Nested';
import Parent, { First } from './components/Namespace';
import DynamicProperties from './components/DynamicPropsValue';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyComponent/>
    <Hello/>
    
    <Section title="New Section component">
      <Button class="btnClass">Click Me!</Button>
    </Section>

    <Parent>
      <Parent.First/>
      <Parent.Second/>
      <First/>
    </Parent>

    <DynamicProperties/>
  </React.StrictMode>
);
