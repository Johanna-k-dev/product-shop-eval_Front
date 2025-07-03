import React from 'react';
import './App.css';
import {AddCartProvider} from "./contexts/AddCartContext";
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