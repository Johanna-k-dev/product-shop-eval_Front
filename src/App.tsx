import React from 'react';
import {BrowserRouter, Routes} from "react-router";
import './App.css';
import LayoutConnected from "./layout/LayoutConnected";
import Router from "./router/Router";

function App() {
  return (
    <>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>

    </>
  );
}

export default App;