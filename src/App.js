import react  from 'react';



import './App.css';

import {Header,Footer,Content} from "./components/layout/";
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
 
  return (
    <div className="container">
    <Header/>
    <Content/>
    <LoginForm/>
    {/* <Footer/> */}
 </div>
  );
}

export default App;
