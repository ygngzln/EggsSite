import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EggBurger from "./pages/EggBurger";
import Wcpoll from "./pages/Wcpoll";
import Blog from "./pages/Blog";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="EggBurger" element={<EggBurger />} />
      <Route path="Wcpoll" element={<Wcpoll />} />
      <Route path="Blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);