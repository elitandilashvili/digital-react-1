import react  from 'react';
import { Model } from './components/model';
import {Phone} from "./Series/phone";

import './App.css';
import { Android } from './Quantity/Quantity';

function App() {
 
  return (
    <div className="container">
      <header className="box">
      <Model />
      <Phone />
      <Android name ="Samsung" >
        <p>This is second phone</p>
      </Android>

      <Android name="LG "/>
      <Android name="Xiaomi"/>
      
      
      
        
       
      </header>
    </div>
  );
}

export default App;
