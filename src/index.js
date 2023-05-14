import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PrivacyPol from './components/privacy';
import PrivPolFull from './components/privPolFull';
import Dyer from './components/dyer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<PrivacyPol />} />
          <Route path='/privacy' element={<PrivacyPol />} />
          <Route path='/dyer' element={<Dyer />} />
          {/* <Route path='/fullPrivPol' element={<PrivPolFull />} /> */}
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
