
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class OptionBar extends React.Component {
    render() {
        return (
            <button className="optbutton" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}
export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : [
                "Home",
                "About Us",
                "Our Values",
                "Sign In/Sign Up"
            ]
        };
    }

    handleClick(i){
        alert("you clicked "+this.state.options[i]);
    }
    
    render() {
        return (
            <div className="menu" >
                <OptionBar  value={this.state.options[0]} onClick={() => this.handleClick(0)} />
                <OptionBar  value={this.state.options[1]} onClick={() => this.handleClick(1)} />
                <OptionBar  value={this.state.options[2]} onClick={() => this.handleClick(2)} />
                <OptionBar  value={this.state.options[3]} onClick={() => this.handleClick(3)} />
            </div>
        );
    }
}



