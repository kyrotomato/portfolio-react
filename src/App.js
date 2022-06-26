import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const [activeNav, setActiveNav] = useState('home');
  const renderPage = () => {
    if (activeNav === 'home') {
      return <About></About>;
    }
    if (activeNav === 'resume') {
      return <Resume></Resume>
    }
    if (activeNav === 'projects') {
      return <Projects></Projects>
    }
    if (activeNav === 'contact') {
      return <Contact></Contact>
    }

  }
 const handlePageChange = (page) => setActiveNav(page);
  return (
    <>
      <Header></Header>
      <Nav activeNav={activeNav}
       handlePageChange={handlePageChange}></Nav>
      {renderPage()}

      <Footer></Footer>
    </>
  );
}

export default App;
