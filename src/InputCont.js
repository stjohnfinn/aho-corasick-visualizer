import React from 'react';

function InputCont() {

    return (
        <div id='InputCont'>
            <div className='inputEntryDiv'>
                <p>Original String:</p>
                <div>
                    <input type='text' />
                </div>
            </div>
            <div className='inputEntryDiv'>
                <p>Substring:</p>
                <div>
                    <input type='text' />
                </div>
            </div>
            <button id='submitButton'>Search</button>
        </div>
    );
}

export default InputCont;