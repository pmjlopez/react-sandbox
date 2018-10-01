import * as React from 'react'
import './App.css'

import Description from "./components/Description"
import Header from "./components/Header"
import Logo from "./components/Logo";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Logo/>
                    <Header/>
                </header>
                <Description countBy={5}/>
            </div>
        );
    }
}

export default App
