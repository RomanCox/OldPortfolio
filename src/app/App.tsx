import React from 'react';
import './App.scss';
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Hiring} from "../hiring/Hiring";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../footer/Footer";

function App() {
  return (
      <div>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        {/*<Hiring/>*/}
        <Contacts/>
        <Footer/>
      </div>
  );
}

export default App;
