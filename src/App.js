import React, { useState, useEffect } from 'react';
import './App.css';

import AuthContextProvider from './Context/AuthContext'
import MountApp from './MountApp';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
          <MountApp/>
         </AuthContextProvider> 
    </div>
  );
}

export default App;
