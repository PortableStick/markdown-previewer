import React, {Component} from 'react';
import InputBox from './markdown/InputBox';
import OutputBox from './markdown/OutputBox';

class markdownManager extends Component {
    constructor() {
        super();
        this.state = {
            markdown: 
`Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears`
        }
    }

    setMarkdownState = function(event) {
        let newMarkdown = event.target.value;
        this.setState({
            markdown: newMarkdown
        });
    };

    render() {
        return (
            <form className="form-inline">
                <InputBox onChange={this.setMarkdownState.bind(this)} value={this.state.markdown} />
                <OutputBox onChange={this.setMarkdownState.bind(this)} value={this.state.markdown} />
            </form>
        );
    }
}

export default markdownManager;
