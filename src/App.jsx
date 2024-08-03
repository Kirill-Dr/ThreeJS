import React from 'react';
import styles from "./App.module.scss";
import SimpleScene from "./components/Scenes/SimpleScene/index.jsx";
import TransformScene from "./components/Scenes/TransformScene/index.jsx";
import GroupScene from "./components/Scenes/GroupScene/index.jsx";

function App() {
  return (
    <main className={styles.main}>
        <div className={styles.main__title}>
            <h1>Three js</h1>
        </div>
        <SimpleScene />
        <TransformScene />
        <GroupScene />
    </main>
  )
}

export default App
