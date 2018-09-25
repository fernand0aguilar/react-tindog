import React, {Component} from 'react';

import { getDogs } from '../API';
class DogsPage extends Component {
    state = {
        dogs: null
    };

    componentDidMount = () => {
        const result = await getDogs();
        console.log(result);
    }

    render(){
        const {dogs} = this.state;
        return dogs ? 
        <h1>Dogs Page!</h1> :
        <h1>Loading...</h1>;
    }
}

export default DogsPage;