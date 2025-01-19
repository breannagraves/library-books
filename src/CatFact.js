import React, {Component } from "react";

export default class CatFact extends Component {
    constructor(props) {
        super(props);
        this.state = {fact: "some random fact"};
    }

    getfact() {
        fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => this.setState({fact: data.fact}));
    }

    componentDidMount() { this.getfact(); }
    
    render() {
        return (
            <div className="CatFact">
                <h2>Click below for a random fact about cats</h2>
                <button onClick={() => this.getfact()}>Get New Fact</button>
                <p>{this.state.fact}</p>

            </div>
        );
    }

}