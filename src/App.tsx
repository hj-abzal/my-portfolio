import React from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import './App.css';
import { Contacts } from './ContactsFooterC/Contacts/Contacts';
import { ContactsFooter } from './ContactsFooterC/ContactsFooter';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { HireMe } from './HireMeBlock/HireMe';
import { Main } from './Main/Main';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

function App() {


  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <AboutMe />
      <Projects />
      <HireMe />
      <ContactsFooter />


    </div>
  );
}

export default App;
