import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDogs } from '../API';
import { getSingleDog } from '../API';

export class Dog extends Component{
    state = {
        dog: null
    };

   static propTypes = {
       match: PropTypes.shape({
           params: PropTypes.shape({
               id: PropTypes.string.isRequired
           }).isRequired
       }).isRequired
   };

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {dog} = await getSingleDog(id);
        this.setState({
            dog
        })
    }

    render(){
        const { dog } = this.state;
        return dog ? 
        <h1>Hdksa</h1> : 
        <h1>Loading...</h1>;
    }
}

export default Dog;