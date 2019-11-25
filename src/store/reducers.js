import { ADD_NEW_ITEM, 
        HIDE_COMPLETE_ITEMS, 
        SHOW_COMPLETE_ITEMS, 
        ENABLE_COMPLETE_ITEM,
        DISABLE_COMPLETE_ITEM } from './actions';
import { stat } from 'fs';

const defaultState = {
    items:[
        {
            id: 122123,
            item: 'Начать использовать Redux',
            complete: false
        },
        {
            id: 23213132,
            item: 'Это тестовая запись',
            complete: true
        }
    ],
    hideAll: false
}

const reducer = (state = defaultState, action) => {

    switch(action.type) {
        
        case ADD_NEW_ITEM:
            const newState = {...state};
            newState.items.push(action.payload);
            return {...newState}
        
        case HIDE_COMPLETE_ITEMS:
            return {
                ...state, 
                hideAll: action.payload
            };
        
        case SHOW_COMPLETE_ITEMS:
            return {
                ...state, 
                hideAll: action.payload
            };

        case ENABLE_COMPLETE_ITEM:
            console.log(ENABLE_COMPLETE_ITEM);  // test 
            const list = state.items;
            list.forEach(elem => {
                if (elem.id === action.payload.id) {
                    elem.complete = true
                }
            })
            return {...state, items: list};

        case DISABLE_COMPLETE_ITEM:
            console.log(DISABLE_COMPLETE_ITEM); // test 
            const list_ = state.items;
            list_.forEach(elem => {
                if (elem.id === action.payload.id) {
                    elem.complete = false
                }
            })
            return {...state, items: list_};
            

        default: break;
    }
    return state;
}

export default reducer;