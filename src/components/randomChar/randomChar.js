import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import './randomChar.css';

import Spiner from '../spiner/spiner';

export default class RandomChar extends Component {

    constructor(props) {
        super(props);

        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25);
        //const id = 120129012901290129;        FOR TEST 
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    } 

    render() {

        const { char, loading, error } = this.state; 
        
        const content = loading ? <Spiner /> : <View char={char} />; 
        const showContent = error ? <ErrorMessage errorNumber={404} errorText={''} /> : content; 
        return (
            <div className="random-block rounded">
                {showContent}
            </div>
        );
    }
}

const View = ({char}) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between">    
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">   
                    <span className="term">Born </span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between"> 
                    <span className="term">Died </span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">  
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}