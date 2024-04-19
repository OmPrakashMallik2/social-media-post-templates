import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Twitter from './Components/Twitter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/twitter' element={<Twitter />} />
      </Routes>
    </div>
  );
}

export default App;
