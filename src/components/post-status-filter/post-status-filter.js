import React from 'react';

//import './post-status-filter.css';
//  <button type="button" className="btn btn-outline-secondary">Понравилось</button>

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const isActive = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${isActive}`}
                    onClick={() => this.props.onFilterSelect(name)}>
                {label}</button>
            )    
        })

        return(
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
} 