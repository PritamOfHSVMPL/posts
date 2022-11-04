import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./app/routes/Router";
import Posts from "./app/container/Posts";
import { useNavigate } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router />
      
    </div>
  );
}

export default App;
