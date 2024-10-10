import React from 'react';
import './App.css';
import Contact from './Views/Contact';
import Education from './Views/Education';
import Home from './Views/Home';
import Projects from './Views/Projects';
import Skills from './Views/Skills';
import ScrollPoints from './components/ScrollPoints';

function App() {
  return (
    <>
      <div >
        <ScrollPoints />
        <Home />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default App;
