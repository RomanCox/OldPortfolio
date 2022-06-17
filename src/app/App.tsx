import React from 'react';
import './App.scss';
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../footer/Footer";

function App() {
  return (
      <div>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
  );
}

export default App;
