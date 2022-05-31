import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/index';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='/home' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
