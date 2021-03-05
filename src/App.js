import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';

function App() {

    const [isAboutShown, setIsAboutShown] = useState(false);
    let aboutClass;

    if (isAboutShown) {
        aboutClass = 'aboutVisible';
    } else {
        aboutClass = 'aboutInvisible';
    }

    return (
        <div id='App'>
            <Header 
                onInfoClick={async () => setIsAboutShown(!isAboutShown) }/>
            <Content aboutClass={aboutClass} />
        </div>
    );
}

export default App;