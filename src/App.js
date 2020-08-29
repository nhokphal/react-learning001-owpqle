import React from "react"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import "./style.css" 
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>  
        <Header />
        <MainContent />  
        <Footer />
      </div>
  
  );
}
export default App;