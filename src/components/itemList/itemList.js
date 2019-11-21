import React, { useState, useEffect } from 'react';
import './itemList.css';

import { ListGroup, ListGroupItem } from 'reactstrap';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';

function ItemList({ getData, onItemSelected, renderItem}) {

    const [ itemList, updateList ] = useState([]);
    const [error, setError] = useState(false);
   
    useEffect(() => {
        getData()
        .then( data => {
            updateList(data);
        })
        .catch(error => {
            console.error(error);
            setError(true);
        })
    }, [getData])

    const renderItems = (arr) => {
        return arr.map( (item) => {
            const label = renderItem(item);
            return (
                <ListGroupItem 
                    key={item.id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(item.id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }
  
    if (error) {
        return <ErrorMessage errorNumber={-1} errorText=''/>
    }
    
    if (!itemList) {
        return  <Spiner />
    }

    const items = renderItems(itemList);
    
    return (
        <div className="char-details rounded">
        <ListGroup flush>
            {items}
        </ListGroup>
        </div>
     
    )
}

export default ItemList;