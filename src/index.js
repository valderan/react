
const getText = (value = 0) => {
    const text = document.querySelector('.number');
    text.innerHTML = value;
}  

const reducer = (state = 0, action) => {
    switch (action.type ) {
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

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = (value = 0) => ({type: 'RES', value});


let state = 0;
getText(state);

document.getElementById('inc').addEventListener('click', () => {
    state = reducer(state, inc())
    getText(state);
})

document.getElementById('dec').addEventListener('click', () => {
    state = reducer(state, dec())
    getText(state); 
})

document.getElementById('res').addEventListener('click', () => {
    state = reducer(state, res(0))
    getText(state); 
})