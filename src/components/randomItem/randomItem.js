import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage';
import Spiner from '../spiner/spiner';
import './randomItem.css';

function RandomItem({ randomIndex, itemDetails }) {


    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const { min, max } = randomIndex;
        randomIndex = min + Math.random() * (max + 1 - min);
        const id = Math.floor(randomIndex);
        const { getItem } = itemDetails;

        getItem(id)
            .then(onItemLoaded)
            .catch(onError)
    }, [])

    const onItemLoaded = (item) => {
        setItem(item);
        setLoading(false);
    }

    const onError = (error) => {
        setLoading(false);
        setError(true);
    }

    

    const { itemType, fields} = itemDetails; 
        
    if (error) {
        return <ErrorMessage errorNumber={404} errorText={''} />
    }
    const itemFields = [];
    fields.forEach( ({ field, label }, index) => {
        itemFields.push(<Field item={item} key={index} field={field} label={label}/>)
    })
    const content =  (
        <>  
            <h4>Random {itemType}: {item.name}</h4>
            <ListGroup flush>
                {itemFields}
            </ListGroup>
        </>
    )
    const showContent = loading ? <Spiner /> : content; 
    return (
        <div className="random-block rounded">
            {showContent}
        </div>
    )
    

}

const Field = ({item, field, label}) => {
    const fieldName = item[field];

    return (
        <>  
            <ListGroupItem className="d-flex justify-content-between">    
                <span className="term">{label}</span>
                <span>{fieldName}</span>
            </ListGroupItem>
        </>
    )
}


export default RandomItem;