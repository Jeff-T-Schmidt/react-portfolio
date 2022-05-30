import React from 'react';
import {Routes,Route } from 'react-router-dom'
import Layout from './components/layout/index';
// import Nav from './components/nav/index';
// import footer from './components/footer/index';
// import header from './components/header/index';
// import project from './components/project/index';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
     </>
  );
}

export default App;
