import React, {Component} from 'react';
    
class InputBox extends Component {
    render() {
        return (
            <div className="form-group">
                <textarea 
                placeholder="Type your markup here"
                onChange={this.props.onChange}
                name="InputBox"
                value={this.props.value}
                />
            </div>
        );
    }
}

export default InputBox;
