import React from 'react';
import Navbar from './Navbar';
import Visual from './Visual';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            originalStr: '',
            substring: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        console.log(name);
        console.log(value);

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

    render() {

        return (
            <div id='App'>
                <Navbar handleChange={this.handleChange} originalStr={this.state.originalStr} substring={this.state.substring} />
                <Visual />
            </div>
        )
    }
}

export default App;