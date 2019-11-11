import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import './post-add-form.css';

export default class PostAddForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text.trim(' ').length > 0) {
            this.props.onAdd(this.state.text);
            this.setState({ text: ''});
        }
    } 

    render() {
        return (

            <form className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    id="addBtn"
                    className="btn btn-outline-secondary">
                    Добавить</button>
                    {
                        (this.state.text.trim(' ').length === 0) ?
                            <UncontrolledPopover trigger="legacy" placement="top" target="addBtn">
                                <PopoverHeader>Ошибка!</PopoverHeader>
                                <PopoverBody>
                                    Невозможно добавить пустую запись!
                                </PopoverBody>
                            </UncontrolledPopover> : ''
                    }
                    
            </form>
        )
    }
}
