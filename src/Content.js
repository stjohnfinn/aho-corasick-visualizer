import React from 'react';
import InputCont from './InputCont';
import Visualization from './Visualization';

function Content(props) {

    return (
        <div id='Content'>
            <InputCont />
            <Visualization />
            <div className={props.aboutClass} >
                <h1>Abott and Costello Asshole Visualizer</h1>
                <p>Visual tool using React and some other libraries to visualize the Aho-Corasick Automata</p>
            </div>
        </div>
    );
}

export default Content;