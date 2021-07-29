import './App.css';
import React from 'react';
import CreateGame from "./components/CreateGame";
import GameSettings from "./components/GameSettings";


function App() {
    return (
        <div className="App">
            <div className="wrap">
                <CreateGame/>
                {/*<GameSettings/>*/}
            </div>
        </div>
    );
}

export default App;
