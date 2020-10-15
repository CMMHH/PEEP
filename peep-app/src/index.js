import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menubar.js'

class App extends React.Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Menubar></Menubar>
                                    
                </div>
            </div>
        )
    }
}

export default App;