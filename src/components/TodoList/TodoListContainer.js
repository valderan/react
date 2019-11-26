import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import { enableCompleteItem,disableCompleteItem } from '../../store/actions.js';


function TodoListContainer({itemList, hide, enableCompleteItem, disableCompleteItem }) {
    
    return (
        <TodoList 
            itemList={itemList} 
            hideAll={hide} 
            enableCompleteItem={enableCompleteItem}
            disableCompleteItem={disableCompleteItem}
            />
    )
}

const mapStateToProps = state => {

    return{
        itemList: state.items,
        hide: state.hideAll
    };
}

const mapDispatchToProps = {
    enableCompleteItem,
    disableCompleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);