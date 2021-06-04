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
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <HireMe />
      <Projects />
      <ContactsFooter />


    </div>
  );
}

export default App;
