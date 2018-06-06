import React, { Component } from 'react';

import './App.css';
import ItemsContainer from "./containers/ItemsContainer";

class App extends Component {

    render() {
        return (
            <div>
                <ItemsContainer />
            </div>
        );
    }
};

export default App;