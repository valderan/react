import React, { useState, useEffect } from 'react';
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

function ItemDetails( { itemId, getItem, selectMessage, children } ) {
    
    console.log('itemId: ', itemId);
    
    const [ item, setItem ] = useState(false);
    const [ error, setError] = useState(false);
   
    // state = {
    //     item: null,
    //     error: false,
    //     textName: this.props.textName ? this.props.textName : ''
    // }
    

    useEffect(() => {
        console.log('up[date');
        if (!itemId) {
            
            return
        }

        getItem(itemId)
            .then( data => {
                console.log('data: ', data);
                setItem(data)
            })
            .catch(error => {
                console.error(error);
                setError(true);
            })
    }, [])



    // componentDidMount() {
    //     this.updateItem()
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.itemId !== prevProps.itemId) {
    //             this.updateItem();
    //     }
    // }

    // componentDidCatch() {
    //     this.setState({error: true})
    // }

        // check for error
        if (error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        // check for item exist
        if (!item) {
            const textString = selectMessage ? selectMessage : 'Plesae select item';
            return ( 
                <>
                    <span className='select-error'>{textString}</span>
                </>
            )
        }

        const { name } = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    {
                        React.Children.map( children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ListGroup>
            </div>
        )
    

}

export default ItemDetails;