import React, {Component} from 'react';
import marked from 'marked';
    
class OutputBox extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="output" dangerouslySetInnerHTML={{__html: marked(this.props.value)}} >

                </div>
            </div>
        );
    }
}

export default OutputBox;
