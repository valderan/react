import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './itemDetails.css';
//import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';

const Field = ( { item, field, label } ) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem> 
    )
}

export {
    Field,
};

// props:
// @itemId - object ID: Book, Character, House
// @getItem() - methos return Item(itemId) : getCharacter / getBook / getHouse 
// @selectMessage - display text when item not exist

export default class ItemDetails extends Component {

    state = {
        item: null,
        error: false,
        textName: this.props.textName ? this.props.textName : ''
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    updateItem = () => {
        const { itemId, getItem} = this.props;
        if (!itemId) {
            return
        }

        getItem(itemId)
            .then( item => {
                this.setState({item})
            })
            .catch(error => {
                console.error(error);
                this.setState({error: true})
            })
    }

    render () {

        // check for error
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        // check for item exist
        if (!this.state.item) {
            const textString = this.props.selectMessage ? this.props.selectMessage : 'Plesae select item';
            return ( 
                <>
                    <span className='select-error'>{textString}</span>
                    {/* <Spiner /> */}
                </>
            )
        }

        const { item, textName } = this.state,
            { name } = item;

        return (
            <div className="char-details rounded">
                <h4>{textName + name}</h4>
                <ListGroup flush>
                    {
                        React.Children.map( this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ListGroup>
            </div>
        )
    }

}

