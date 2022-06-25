import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const [activeNav, setActiveNav] = useState('/');
  return (
<>
<Header></Header>
<Nav activeNav={activeNav}
setActiveNav={setActiveNav}></Nav>
{activeNav === '/' && <About></About>}
{activeNav === '/resume' && <Resume></Resume>}
{activeNav === '/projects' && <Projects></Projects>}
{activeNav === '/contact' && <Contact></Contact>}


<Footer></Footer>
</>
  );
}

export default App;
