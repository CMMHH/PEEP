import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menubar.js';
import './mainpage.js'; 
import './style.css';
import MainPage from './mainpage.js';

//work on this later @ctinam
// Tester comment for git name
class App extends React.Component {
    render() {
        return (
            <div>
                <Menubar ></Menubar>
                <MainPage ></MainPage>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;