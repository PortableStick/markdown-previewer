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

#### Brought to you by [CodeMirror](https://codemirror.net/) and [React-CodeMirror](https://github.com/JedWatson/react-codemirror)

An extension of [markdown](https://en.wikipedia.org/wiki/Markdown)
-----------

Underscores_are_allowed_between_words.

| First Header  | Second Header |
| :-------------: | :-------------: |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


~~Strikethrough text~~
~~**That works with 
other formatting and spans
across lines**~~

### Fenced code blocks (and syntax highlighting)

\`\`\`javascript
class FunComponent extends React.Component {
    render() {
        //make folks happy
    }
}
\`\`\`

## Task Lists won't render here, but
## syntax highlighting works in the editor

- [ ] Incomplete task list item
- [x] **Completed** task list item

## A bit of GitHub spice

* SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
* \#Num: #1
* User/#Num: mojombo#1
* User/Project#Num: mojombo/god#1

>I love scotch

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
