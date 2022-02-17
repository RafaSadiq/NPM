import React, { Component } from 'react';
import { footer } from 'npm-rafa-pack';

export default class App extends Component {
    render() {
        return ( < div > < h1 > DevCamp React Starter < /h1> { footer('DevCamp') } </div > );
    }
}