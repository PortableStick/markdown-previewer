import React, {Component} from 'react';
import InputBox from './markdown/InputBox';
import OutputBox from './markdown/OutputBox';

class markdownManager extends Component {
    constructor() {
        super();
        this.state = {
            markdown:
`GitHub Flavored Markdown
========================

#### Brought to you by [CodeMirror](https://codemirror.net/), [React-CodeMirror](https://github.com/JedWatson/react-codemirror), and [Marked](https://github.com/chjj/marked)

An extension of [markdown](https://en.wikipedia.org/wiki/Markdown)
-----------

Underscores_are_allowed_between_words.

~~Strikethrough text~~
~~**That works with
other formatting and spans
across lines**~~

### Quotes

> I like bananas \'cause they've got no bones

### Fenced code blocks (and syntax highlighting)

\`\`\`javascript
class FunComponent extends React.Component {
    render() {
        //make folks happy
    }
}
\`\`\`

## GitHub specific markup

- [ ] Incomplete task list item
- [x] **Completed** task list item

* SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* \#Num: #1
* User/#Num: mojombo#1
* User/Project#Num: mojombo/god#1

See http://github.github.com/github-flavored-markdown/.


`
        }
    }

    setMarkdownState = function(newMarkdown) {
        this.setState({
            markdown: newMarkdown
        });
    };

    render() {
        return (
            <form className="form-inline">
                <InputBox onChange={this.setMarkdownState.bind(this)} value={this.state.markdown} />
                <OutputBox value={this.state.markdown} />
            </form>
        );
    }
}

export default markdownManager;
