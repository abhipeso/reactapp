import logo from './logo.svg';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let name = "Abhishek";
function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3">
    <Textform abc="enter your text here eh"/>
    </div>
   
  
    </>

  );
}
// console.log(object)

export default App;
