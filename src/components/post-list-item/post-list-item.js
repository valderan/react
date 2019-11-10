import React from 'react';

import './post-list-item.css';
import moment from 'moment';
import 'moment/locale/ru';
    
import ChangeItem from '../change-item';

export default class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: props.important,
            label: props.label,
            like: false,
            change: false,
            onDelete: props.onDelete
        };
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
    
     onChange = (changeLabel, changeStatus = true) => {  
        if (changeStatus) {
            this.setState({ label: changeLabel, change:false })
        } else {
            this.setState({ change:false })
        }
     } 

     onChangeBtn = () => {
        this.setState({ change: true })
     }
z
    render() {
        const { important, label, like, change, onDelete } = this.state,
            changeBtn = <button type="button" className="btn btn-outline-success" onClick={this.onChangeBtn}>изменить</button>;
            
        let classNames = 'app-list-item d-flex justify-content-between';
        
        // избранное
        if (important) {
            classNames += ' important';
        }

        // like поста
        if (like) {
            classNames += ' like';
        }

        // время созадния
        moment.locale('ru');
        const dateCreate =  moment().format('h:mm');    

        // изменение записи
        let changeItm = change ? '' : changeBtn;
        
        return ( 
            <>
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
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    <span className="badge badge-secondary">{dateCreate}</span>
                </div>
            </div>
            {
                change ? <ChangeItem onChange={this.onChange} label={label}/> : changeItm
            }
           
            </>

        )
    }
}
