import React from 'react';

function Header(props) {

    return (
        <div id='Header'>
            <p>Aho-Corasick Automata Visualizer</p>
            <h1 onClick={props.onInfoClick} >i</h1>
        </div>
    );
}

export default Header;