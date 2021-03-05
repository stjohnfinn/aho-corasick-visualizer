import React from 'react';
import InputCont from './InputCont';
import Visualization from './Visualization';

function Content(props) {

    return (
        <div id='Content'>
            <InputCont />
            <Visualization />
            <div className={props.aboutClass} >
                <p>Abott and Costello Asshole Visualizer</p>
            </div>
        </div>
    );
}

export default Content;