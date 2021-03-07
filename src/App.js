import React from 'react';
import Navbar from './Navbar';
import Visual from './Visual';
import { stringSearch } from './stringSearch.js';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            originalStr: '',
            substring: '',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        if (name === 'originalStr') {
            this.setState({
                originalStr: value
            });
        } else if (name === 'substring') {
            this.setState({
                substring: value
            });
        }
    }

    handleSubmit() {
        console.log('starting algorithm');

        this.setState({
            text: stringSearch(this.state.originalStr, this.state.substring)
        });
    }

    render() {

        return (
            <div id='App'>
                <Navbar handleChange={this.handleChange} originalStr={this.state.originalStr} substring={this.state.substring} handleSubmit={this.handleSubmit} />
                <Visual text={this.state.text} />
            </div>
        )
    }
}

export default App;