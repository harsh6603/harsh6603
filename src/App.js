import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] =useState("light");
  const [alert,setAlert] =useState(null);

  const enterAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const toggleMode = () => {
    if(mode==="dark")
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      enterAlert("Light mode is enable.","success");
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor="black";
      enterAlert("Dark mode is enable.","success");
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} title="Text Analysis" first="Home" second="About" />
    <Alert alert={alert}/>
    <Routes>
      <Route exact path='/' element={<TextArea mode={mode} enterAlert={enterAlert}/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
