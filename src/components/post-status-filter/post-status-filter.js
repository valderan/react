import React from 'react';
import { Button } from 'reactstrap';

//import './post-status-filter.css';
//  <button type="button" className="btn btn-outline-secondary">Понравилось</button>

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <Button color="info">Все</Button>
            <Button outline color="secondary">Понравилось</Button>
        </div>
    )
} 

export default PostStatusFilter;