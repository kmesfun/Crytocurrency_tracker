import Tickers from './components/Tickers.js';
import React, { Component } from 'react';
import './App.css';


    class App extends Component {
        render() {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>Cryptocurrency Tracker</h2>
                    </div>
                    <Tickers />
                </div>
            );
        }
    }
    

    export default App;