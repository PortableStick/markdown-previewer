import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
require('codemirror/mode/gfm/gfm');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
    
class InputBox extends Component {
    render() {
        let options = {
            lineNumbers: true,
            mode: 'gfm'
        };

        return (
            <div className="form-group">
                <Codemirror className="input" value={this.props.value} onChange={this.props.onChange} options={options} />
            </div>
        );
    }
}

export default InputBox;
