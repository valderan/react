import React from 'react';


export default class ChangeItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: this.props.label
        }    
    }

    
    close = () => {
        this.props.onChange('', false);
    }

    
    change = () => {
        this.props.onChange(this.state.label);
    }

    inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        this.setState({label: updatedKeyword});
    }

    render() {
        
        const { label } = this.props
 
        return (
        
            <div className="jumbotron">
                <div className="modal-header">
                        <h5 className="modal-title">Редактирование</h5>
                        <button onClick={this.close} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <input   onChange={(event)=>this.inputChangedHandler(event)} 
                        className="form-control form-control-lg" 
                        type="text" 
                        defaultValue={label}/>
                <div className="modal-footer">
                        <button onClick={this.change} type="button" className="btn btn-primary">Сохранить изменения</button>
                        <button onClick={this.close} type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                </div>
            </div>
            
        )
    }
};
