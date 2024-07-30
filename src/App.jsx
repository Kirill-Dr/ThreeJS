import React from 'react';
import "./App.css";
import SimpleScene from "./components/SimpleScene/index.jsx";
import TransformScene from "./components/TransformScene/index.jsx";

function App() {
  return (
    <section className="mainSection">
        Three js
        <SimpleScene />
        <TransformScene />
    </section>
  )
}

export default App
