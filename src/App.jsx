import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoreAbout from './components/MoreAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Socials from './components/Socials';
import ScrollUp from './components/ScrollUp';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MoreAbout />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Socials />
      <ScrollUp />
    </>
  );
}
