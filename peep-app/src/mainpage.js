import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './style.css';


class HomeSection extends React.Component {
    render() {
        return (
            <div className="home">
                {/* <div className="title"> */}
                    <p className="title">PEEP</p>
                {/* </div> */}
            </div>
        )
    }
}

class AboutUsSection extends React.Component {
    render() {
        return (
            <p className="aboutus">
                ABOUT US
            </p>
        )
    }
}

class ValuesSection extends React.Component {
    render() {
        return (
            <p className="values">
                OUR VALUES
            </p>
        )
    }
}

export default class MainPage extends React.Component {
    render(){
        return (
            <div className="mainpage"> 
            <HomeSection ></HomeSection>
            <AboutUsSection ></AboutUsSection>
            <ValuesSection ></ValuesSection>
            </div>
        )
    }

}