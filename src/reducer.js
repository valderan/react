const reducer = (state = 0, action = { type : undefined }) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        
        case 'DEC':
            return state - 1;

        case 'RES':
                return action.value;

        default: 
            return state;
        }
}

export default reducer