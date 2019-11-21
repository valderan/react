import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './itemDetails.css';
import Spiner from '../spiner/spiner';
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

    const [ item, setItem ] = useState(null);
    const [ error, setError] = useState(false);
    const [ load, isLoad ] = useState(false);
    
    useEffect(() => {
        
        if (!itemId) return

        isLoad(true)        
        getItem(itemId)
            .then( data => {    
                isLoad(false);
                setItem(data);
            })
            .catch(error => {
                console.error(error);
                setError(true);
            })
    }, [itemId])


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

    if (load) {
        return ( 
            <>
                <Spiner />
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