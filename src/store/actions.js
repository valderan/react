export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const HIDE_COMPLETE_ITEMS = 'HIDE_COMPLETE_ITEMS';
export const SHOW_COMPLETE_ITEMS = 'SHOW_COMPLETE_ITEMS';
export const ENABLE_COMPLETE_ITEM = 'ENABLE_COMPLETE_ITEM'; 
export const DISABLE_COMPLETE_ITEM = 'DISABLE_COMPLETE_ITEM'; 

export const addNewItem = item => ({
    type: ADD_NEW_ITEM,
    payload: item 
});   

export const hideCompleteItems = () => ({
    type: HIDE_COMPLETE_ITEMS,
    payload: true
});

export const showCompleteItems = () => ({
    type: SHOW_COMPLETE_ITEMS,
    payload: false
});

export const enableCompleteItem = item => ({
    type: ENABLE_COMPLETE_ITEM,
    payload: item
});

export const disableCompleteItem = item => ({
    type: DISABLE_COMPLETE_ITEM,
    payload: item
})