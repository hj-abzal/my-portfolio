import React from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import style from './App.module.scss'
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { HireMe } from './HireMeBlock/HireMe';
import { Main } from './Main/Main';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

function App() {


  return (
    <div className={style.app} >
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <HireMe />
      <Projects />
      <Contacts />
      <Footer />


    </div>
  );
}

export default App;
