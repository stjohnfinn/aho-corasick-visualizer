import React from 'react';

function Navbar(props) {

    return (
        <div id='Navbar'>
            <p id='info'>i</p>
            <h2>Aho-Corasick Algorithm Visualizer</h2>
            <p>Text String:</p>
            <div className='inputEntryDiv'>
                <input type='text' name='originalStr' value={props.originalStr} onChange={props.handleChange} />
            </div>
            <p>Pattern String:</p>
            <div className='inputEntryDiv'>
                <input type='text' name='substring' value={props.substring} onChange={props.handleChange} />
            </div>
            <button onClick={props.handleSubmit}>Search</button>
        </div>
    )
}

export default Navbar;