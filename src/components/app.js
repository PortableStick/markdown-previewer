import React, {Component} from 'react';
import Header from './header';
import MarkdownManager from './markdownManager';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MarkdownManager />
            </div>
        );
    }
}

export default App;