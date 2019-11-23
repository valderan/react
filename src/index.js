// свой Redux =) 
class Redux {
    constructor() {
        this.store = undefined;
        this.state = undefined;
        this.subscribeFunc = () => {};
    }

    createStore = (store) => {
        this.store = store;
        this.state = this.store();
    }

    dispatch = async (param) => {
        this.state = await this.store(this.state, param);
        this.subscribeFunc();
        return this.state;
    }

    // возврат state
    getState() {
        return this.state;
    }

    subscribe( func ) {
        this.subscribeFunc = func;
    }
}

// запись текста в элемент на странице
const getText = (value = 0) => {
    const text = document.querySelector('.number');
    text.innerHTML = value;
}  

// функция редьюсер
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

// типы операций
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = (value = 0) => ({type: 'RES', value});

// загрузка с/на сервер
const getUrl = async (url = '/numbers', string = undefined) => {
    const baseUrl = 'http://localhost:3333';
    let res = undefined;
    if (string) {
        res = await fetch(`${baseUrl}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(string)
        });
    } else {
        res = await fetch(`${baseUrl}${url}`);
    }
    
    if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    return await res.json();
}

// инициализация
const store = new Redux();
store.createStore(reducer)

// подписка
store.subscribe( () => {
    getText(store.getState());
});

// слушатели
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec()) 
})

document.getElementById('res').addEventListener('click', () => {
    store.dispatch(res(0))
})

document.getElementById('dwn').addEventListener('click', async () => {
    const result = await getUrl();
    const db = result.filter( elem => elem.hasOwnProperty('const'));
    const { min, max } = { min:0, max:2 };
    const index = Math.floor( min + Math.random() * (max + 1 - min) );
    store.dispatch(res(db[index].const));
})

document.getElementById('up').addEventListener('click', async () => {
    const stringDb = { saved: store.getState() };
    await getUrl(undefined,stringDb);
})