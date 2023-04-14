import logo from './logo.svg';
import './App.css';

import GlobalHeader from './Components/GlobalHeader';
import { useState } from 'react';
import Home from './Components/Home';


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showWebsite1, setShowWebsite1] = useState(false);
  const [showWebsite2, setShowWebsite2] = useState(false);

  function showWebsiteFrame1() {
    setShowWebsite1(true);
  }

  function showWebsiteFrame2() {
    setShowWebsite2(true);
  }

  function showHome() {
    setShowWebsite1(false);
    setShowWebsite2(false);
  }

  function handleButtonClick() {
    setShowPopup(true);
  }
  if (showPopup) {
    alert("Stuart is dangerous snek");
  }
  return (
    <div className="App">
      <GlobalHeader onClick={showHome} />

      {(showWebsite1) ? (
        <iframe title='survey1'
          src="https://myworld2030.org/partner/LPE_PSU"
          style={{ width: '100vw', height: '100vw' }}
        />
      ): (
        ( showWebsite2) ? (
        <iframe title='survey2'
          src="https://luhanyang.wordpress.com/"
          style={{ width: '100vw', height: '100vw' }}
        />
      ): (<Home handleButtonClick={handleButtonClick} showWebsiteFrame1={showWebsiteFrame1} showWebsiteFrame2={showWebsiteFrame2} />))}

      
    </div>
  );
}

export default App;
