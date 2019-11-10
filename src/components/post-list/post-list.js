import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css';


const PostList = ({ posts, onDelete }) => {

    const elements = posts.filter(item => typeof(item) === 'object' )
        .filter(item => item.hasOwnProperty('label') && item.hasOwnProperty('id') && item.hasOwnProperty('important'))
        .filter(item => item.label.replace(/\s+/g, '').length > 0)
        .map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                /> 
            </li>
        )
    })

    return(
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
} 

export default PostList;