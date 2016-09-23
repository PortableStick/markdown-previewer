import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
import gfm from 'codemirror/mode/gfm/gfm'

function InputBox(props) {
        const options = {
            lineNumbers: true,
            mode: 'gfm'
        };

        return (
            <div className="form-group">
                <Codemirror className="input" value={props.value} onChange={props.onChange} options={options} />
            </div>
        );
}

export default InputBox;
