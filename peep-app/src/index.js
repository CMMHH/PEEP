import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './menubar.js';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <div>

                <Menubar ></Menubar>
                                    
     
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;