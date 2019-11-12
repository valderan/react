import React, {Component} from 'react';
import './itemList.css';

import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ItemList extends Component {

    render() {
        return (
            <div className="char-details rounded">
            <ListGroup flush>
                <ListGroupItem className="list-group-item">John Snow</ListGroupItem>
                <ListGroupItem className="list-group-item">Brandon Stark</ListGroupItem>
                <ListGroupItem className="list-group-item">Geremy</ListGroupItem>
            </ListGroup>
            </div>
         
        );
    }
}