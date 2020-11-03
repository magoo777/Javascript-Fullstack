import React from 'react';

import Nav from './components/NavigationBar/Navigation';
import Routing from './routes/Routing';

import { UserProvider } from '../src/shared/context/UserContext';
import NavStyle from './components/NavigationBar/styleComp'



function App() {
  return (
  
    <UserProvider>
      <NavStyle />
      <Routing>
        <Nav></Nav>
      </Routing>
    </UserProvider>
  );
}

export default App;




