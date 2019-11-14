import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';
export default class CharDetails extends Component {

    gotService = new gotService();
    state = {
        char: null,
        error: false
    }
    
    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
                this.updateChar();
        }
    }

    componentDidCatch() {
        this.setState({error: true})
    }


    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return
        }

        this.gotService.getCharacter(charId)
            .then( char => {
                this.setState({char})
            })
        //this.foo.bar=0;   // error
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        if (!this.state.char) {
            return ( 
                <>
                    <span className='select-error'> Please select a character</span>
                    <Spiner />
                </>
            )
        }

        const { name, gender, born, died, culture } = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}