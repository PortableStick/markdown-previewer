import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';

marked.setOptions({
  highlight: (code) => highlight.highlightAuto(code).value
});

function OutputBox(props) {
        return (
            <div className="form-group">
                <div className="output" dangerouslySetInnerHTML={{__html: marked(props.value)}} />
            </div>
        );
}

export default OutputBox;
