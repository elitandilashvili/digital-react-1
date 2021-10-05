import react  from 'react';
import { Model } from './components/model';
import {Phone} from "./Series/phone";

import './App.css';

function App() {
 
  return (
    <div className="container">
      <header className="box">
      <Model />
      <Phone />
      
      
        
       
      </header>
    </div>
  );
}

export default App;
