
import React from 'react';
import ReactDOM from 'react-dom';

class Options extends React.Component {
    render() {
        return (
            <button className = "optbutton" onClick = {this.props.OnClick}>
                {this.props.value}
            </button>
        )
    }
}
export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: Array(4).fill(null)
            // Homepage(Into), About Us, Simple Diagram/Sa
        };
    }
    // renderOptions(i) {
    //     return(
    //         <Optionbar 
    //          value = {this.state.options[i]}
    //         />
    //     );
    // }
    render() {
        this.state.options[0] = "Home"
        this.state.options[1] = "About Us"
        this.state.options[2] = "Values"
        this.state.options[3] = "Sign In/Up"
        
        return (
            <div>
                <Options  value = {this.state.options[0]} />
                <Options  value = {this.state.options[1]} />
                <Options  value = {this.state.options[2]} />
                <Options  value = {this.state.options[3]} />
                
            </div>
        );
    }
}

ReactDOM.render(<Menubar />, document.getElementById('root'));
