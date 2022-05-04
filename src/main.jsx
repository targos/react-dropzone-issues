import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Menu from './Menu';
import Group from './Group';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
