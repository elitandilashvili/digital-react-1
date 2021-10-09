import react  from 'react';



import './App.css';

import {Header,Footer,Content} from "./components/layout/";

function App() {
 
  return (
    <div className="container">
    <Header/>
    <Content/>
    <Footer/>
 </div>
  );
}

export default App;
