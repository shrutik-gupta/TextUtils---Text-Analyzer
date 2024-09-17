import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import Alert from './components/Alert.jsx'
import About from './components/About.jsx';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //it is an object

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
      showAlert('Dark Mode enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert('Light Mode enabled','success');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
              <TextForm mode={mode} showAlert={showAlert} heading='Try TextUtils - Text Analyzer'/>
            } />
            <Route exact path="/about" element={
              <About />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
