import React from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
<>
<Header></Header>
<Nav></Nav>
<About></About>
<Resume></Resume>
<Projects></Projects>
<Contact></Contact>
<Footer></Footer>
</>
  );
}

export default App;
