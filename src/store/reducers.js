import { ADD_NEW_ITEM, 
        HIDE_COMPLETE_ITEMS, 
        SHOW_COMPLETE_ITEMS, 
        ENABLE_COMPLETE_ITEM,
        DISABLE_COMPLETE_ITEM } from './actions';

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
            const newItems = [...state.items, action.payload ];
            return {...state, items: newItems}
        
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
            const list = [...state.items];
            list.forEach(elem => {
                if (elem.id === action.payload.id) {
                    elem.complete = true
                }
            })
            return {...state, items: list};

        case DISABLE_COMPLETE_ITEM:
            const list_ = [...state.items];
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