import react  from 'react';



import './App.css';
import { LoginForm } from './components/Forms/LoginForm';

import {Header,Footer,Content} from "./components/layout/";




function App() {
 
  return (
    <div className="container">
    <Header/>
    <Content/>
    <LoginForm/>
    
    
    
    <Footer/>
 </div>
  );
}

export default App;
