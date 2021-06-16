import React from 'react';
import './App.css';
import { Contributors } from './components/contributors';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Contributors />
        </div>
    );
}

export default App;
