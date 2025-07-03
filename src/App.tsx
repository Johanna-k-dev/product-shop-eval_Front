import React from 'react';
import {BrowserRouter,} from "react-router";
import './App.css';
import {AddCartProvider} from "./contexts/AddCartContext";
import {AuthProvider} from './contexts/AuthContext';
import AppRoutes from "./router/AppRoutes";

function App() {

  return (
    <>
        <AddCartProvider>
                    <AppRoutes/>
        </AddCartProvider>
    </>
  );
}

export default App;