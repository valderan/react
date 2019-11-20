import React, {Component} from 'react';
import './itemList.css';

import { ListGroup, ListGroupItem } from 'reactstrap';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';
export default class ItemList extends Component {

    
    state = {
        itemList: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then( itemList => {
                this.setState({itemList})
            })
            .catch(error => {
                console.error(error);
                this.setState({error: true})
            })
    }

    renderItems = (arr) => {
        return arr.map( (item) => {
            const label = this.props.renderItem(item);
            return (
                <ListGroupItem 
                    key={item.id}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(item.id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }
        
        const { itemList } = this.state;

        if (!itemList) {
            return  <Spiner />
        }

        const items = this.renderItems(itemList);

        return (
            <div className="char-details rounded">
            <ListGroup flush>
                {items}
            </ListGroup>
            </div>
         
        );
    }
}