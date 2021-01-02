import React, { Component } from 'react'
// import '../style.css';



class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }


    render() {
        return (
            <span className="title-title">{this.state.time}</span>
        );
    }
}

export default Clock;