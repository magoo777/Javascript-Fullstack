import React from 'react';

import Nav from './components/NavigationBar/Navigation';
import Routing from './routes/Routing';

import { UserProvider } from '../src/shared/context/UserContext';




function App() {
  return (
    <UserProvider>
      <Routing>
        <Nav></Nav>
      </Routing>
    </UserProvider>
  );
}

export default App;




