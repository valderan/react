import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';
export default class ItemList extends Component {

    gotService = new gotService();
    state = {
        charList: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( charList => {
                this.setState({charList})
            })
    }

    renderItems = (arr) => {
        return arr.map( (item, i) => {
            return (
                <ListGroupItem 
                    key={i}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(item.id)}>{item.name}</ListGroupItem>
            )
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }
        
        const { charList } = this.state;

        if (!charList) {
            return  <Spiner />
        }

        const items = this.renderItems(charList);

        return (
            <div className="char-details rounded">
            <ListGroup flush>
                {items}
            </ListGroup>
            </div>
         
        );
    }
}