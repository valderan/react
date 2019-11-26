import React from 'react';
import { connect } from 'react-redux';

import Input from './Input';
import { addNewItem, hideCompleteItems, showCompleteItems } from '../../store/actions.js';

function InputContainer({ hide, addNewItem, hideCompleteItems, showCompleteItems }) {
    return(
        <Input hide={hide} addNewItem={addNewItem} hideCompleteItems={hideCompleteItems} showCompleteItems={showCompleteItems}/>
    )
}

const mapStateToProps = state => {

    return{
        hide: state.hideAll
    };
}

const mapDispatchToProps = {
    addNewItem, 
    hideCompleteItems, 
    showCompleteItems 
}
export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);