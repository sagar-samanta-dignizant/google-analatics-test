import "./App.css";
import { useState } from "react";
import MyForm from "./components/MyForm";

function App() {
 
  return (
    <div className="App" style={{ dislapy: "flex" }}>
      <img src="/logo192.png" alt="NOT" />
      <MyForm />
    </div>
  );
}

export default App;
