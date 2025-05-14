import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Fotter from './components/Fotter';

const App = () => {
  return (
      <main className="overflow-x-hidden bg-black text-gray-200 antialiased min-h-screen m-0 p-0">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <ContactForm />
      <Fotter />
    </main>
  );
}

export default App;
