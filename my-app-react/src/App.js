import React from 'react';

import Nav from './components/NavigationBar/Navigation';
import Routing from './routes/Routing';

import './App.css';



function App() {
  return (
    <Routing>
      <Nav></Nav>
    </Routing>
    );
}

export default App;



