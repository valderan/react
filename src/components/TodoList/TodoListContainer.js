import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import { hideCompleteItems,showCompleteItems,
        enableCompleteItem,disableCompleteItem } from '../../store/actions.js';


function TodoListContainer({itemList, hide, hideCompleteItems, showCompleteItems, enableCompleteItem, disableCompleteItem }) {

    return (
        <TodoList 
            itemList={itemList} 
            hideAll={hide} 
            hideCompleteItems={hideCompleteItems}
            showCompleteItems={showCompleteItems}
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
    hideCompleteItems,
    showCompleteItems,
    enableCompleteItem,
    disableCompleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);