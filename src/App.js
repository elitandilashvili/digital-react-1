import react  from 'react';



import './App.css';
// import { LoginForm } from './components/Forms/LoginForm';

import {Header,Footer} from "./components/layout/";
import {Routes} from "./Routes";





function App() {
 
  return (
    <div className="container">
    <Header/>
    {/* <Content/> */}
    <Routes/>

    {/* <LoginForm/> */}
    
    
    
    {/* <Footer/> */}
 </div>
  );
}

export default App;
