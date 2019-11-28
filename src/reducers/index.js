
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items:[],
    itemsUpload: false,
    itemsTotal: (items) => {
        let price = 0;
        let total = 0;
        items.forEach(item => {
            price += ( item.price * item.count);
            total += item.count;
        })
        return { total, price } ;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };

        case 'CLEAR_CART':
                return {
                    ...state,
                    items:[]
                };
            

        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const findIndex = state.items.findIndex(item => item.id === id );
            
            if (findIndex >= 0 ) {
                
                const newItems = [...state.items];
                newItems[findIndex].count++
                return {
                    ...state,
                    newItems: [...newItems]
                }

            } else {
                
                const item = state.menu.find( item => item.id === id )
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: 1
                }
    
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };    
            }

            
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx );
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };

        
        default: 
            return state;
    }
}

export default reducer;