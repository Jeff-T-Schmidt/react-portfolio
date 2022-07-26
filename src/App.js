import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/index';
import About from '../src/components/About'
import Home from './components/Home'
import ContactUs from './components/Contact'
import Project from './components/project'

import Nav from '../src/components/layout/nav/index';
import Footer from '../src/components/layout/footer/Footer';


function App() {
  return (
    <>
      <Nav />
      <Footer />
      <Routes>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
