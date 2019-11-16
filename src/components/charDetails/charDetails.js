import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';

const Field = ({ char, field, label }) =>  {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </ListGroupItem> 
    )
}

export {
    Field
};

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
            .catch(error => {
                console.error(error);
                this.setState({error: true})
            })

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

        const { char } = this.state;
        const { name } = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})   
                        })
                    }
                </ListGroup>
            </div>
        );
    }
}