import React from 'react';

import './post-list-item.css';
import moment from 'moment';
import 'moment/locale/ru';


export default class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: props.important,
            like: false
        }
    }
    
    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    

    render() {
        const { label } = this.props;
        const { important, like } = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }
        moment.locale('ru');
        const dateCreate = moment().startOf('hour').fromNow(); 

        return ( 
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                            onClick={this.onImportant}
                            type="button" 
                            className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    <span className="badge badge-secondary">{dateCreate}</span>
                </div>
            </div>
        )
    }
}
