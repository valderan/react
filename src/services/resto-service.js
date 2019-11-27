
// буферизация данных, чтоб не делать часто запросы к апи для статических данных
class Buffer {
    constructor(buffer = undefined) {
        this.buffer = [];
        if (buffer) {
            this.buffer.push(buffer);
        }
    }

    ifExist(nameBuffer) {
        return this.buffer.filter(elem => elem.name === nameBuffer).length
    }

    create(nameBuffer, bodyBuffer, rewriting = true) {
        
        if (!rewriting) {
            if (this.ifExist(nameBuffer) > 0) return false; 
        } 

        if (this.ifExist(nameBuffer) > 0) {
            this.buffer = this.buffer.filter(elem => elem.name !== nameBuffer)
        } 
        
        this.buffer.push({
            name: nameBuffer,
            body: bodyBuffer
        })

        return this.ifExist(nameBuffer) > 0 ? true : false; 
    }

    get(nameBuffer) {
        if (this.ifExist(nameBuffer) > 0) {
            return this.buffer.filter(elem => elem.name === nameBuffer)[0].body
        }

        return false;
    }

    clear(nameBuffer) {
            this.buffer = this.buffer.filter(elem => elem.name !== nameBuffer);
        
    }

}

export default class RestoService {
    
    constructor() {
        // base URL api
        // start server: json-server --watch ./src/db.json --port 3333
        this.apiURL = 'http://localhost:3333'
    }

    // base method for work with api 
    getUrl = async (url, string = undefined) => {
        const baseUrl = this.apiURL;
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
    
    getMenuItems = async (menu = '/menu') => {
        const category = await this.getUrl('/category');
        const buffer = new Buffer({name:'category', body:category });
        const res = await this.getUrl(menu);
        return await res.map( item => this._transformMenu(item, buffer.get('category')));
    }

    static _valid = (str = '') => {
        return str.length !== 0 ? str : 'no data';
    }

    _transformMenu = (menu, category) => {
        
        const cat = category.filter( elem => elem.name === menu.category)
        const picURL = cat.length > 0 ? cat[0].url : '';

        return {
            title: RestoService._valid(menu.title), 
            price: RestoService._valid(menu.price),
            url: menu.url,
            category: RestoService._valid(menu.category),
            id: menu.id,
            pic: picURL
        }
    }
}

