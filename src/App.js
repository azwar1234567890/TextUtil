// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';gi

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }





  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "Success")
      document.title = "TextUtils - LightMode"



    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "Success")
      document.title = "TextUtils - DarkMode"
    }
  }


  return (

    <>
      <Router>
        <Navbar about='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
        <Routes>
          {/* <Route path="/about" element= {<About/>}/> */}
          <Route path="/" element={ <TextForm showAlert={showAlert} title="Enter Your Text..." mode={mode} />}/>
        </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
