import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { InitialStateType } from './Redux/portfolioReducer';
import { AppStateType } from './Redux/Store';
import { Skills } from './Skills/Skills';
import { Works } from './Works/Works';

function App() {
  const isLight = useSelector<AppStateType, boolean>( state => state.portfolio.isLight)
  const inEnglish = useSelector<AppStateType, boolean>( state => state.portfolio.inEnglish)

  return (
    <div className="App">
      <Header isLight={isLight} inEnglish={inEnglish}/>
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
