import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
    width: 100%;
    height: 80%;
    overflow: auto;
    list-style-position: inside;
`;

const Post = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`;

const PostComplete = styled.p`
    text-decoration: line-through;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`;

const Line = styled.p`
    width: 60px;
    height: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

function CreatePost({item, id, forEnable, forDisable}) {

    if (item.complete) {
        return(
            <PostComplete key={id} onClick={() => {
                    forDisable(item)
                }}>
                {item.item}
            </PostComplete>
        )
    } else {
        return (
            <Post key={id} onClick={() => { 
                forEnable(item)
            }}>
                {item.item}
            </Post>
        )
    }
}

function TodoList( {itemList , hideAll, enableCompleteItem, disableCompleteItem} ) {
    
    const allItems=[];
    
    itemList.forEach((item, index )=> {
        if (hideAll) {
            if (!item.complete) {
                allItems.push(<CreatePost item={item} key={item.id} forEnable={enableCompleteItem} forDisable={disableCompleteItem}/>)
                allItems.push(<Line key={index}/>)    
            }
        } else {
            allItems.push(<CreatePost item={item} key={item.id} forEnable={enableCompleteItem} forDisable={disableCompleteItem}/>)
            allItems.push(<Line key={index}/>);
        }
    })

    return(
        <Todo>
            {allItems}
        </Todo>   
    )
}


export default TodoList
