export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    

    _getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }
    
    getResource = (url) => {
            return this._getResource(`${this._apiBase}${url}`)
    }

    // получение всех героев
    getAllCharacters = async () => {
        const res =  await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }

    // получение героя по id
    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res)
    }

    // получение всех книг
    getBooks = async () => {
        const res = await this.getResource(`/books`);
        return res.map(this._transformBook);
    }

    // получение книги по номеру
    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    // получение списка всех домов
    getAllHouses = async () => {
        const res = await this.getResource(`/houses`);
        const overlord = await this.getOverlord(res.overlord);
        
        return await res.map(this._transformHouse, overlord);
    }

    // получение дома по номеру
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        const overlord = await this.getOverlord(res.overlord);
        return await this._transformHouse(res, overlord);
    }

    static _valid = (str = '') => {
        return str.length !== 0 ? str : 'no data';
    }

    _transformCharacter(char) {
        return {
            id: char.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/characters\//,''),
            name: GotService._valid(char.name),
            gender: GotService._valid(char.gender),
            born: GotService._valid(char.born),
            died: GotService._valid(char.died),
            culture: GotService._valid(char.culture)
        }
    }


    getOverlord = async (url = '') => {
        let overlord = 'no data';
        if (url.length > 0) {
            const overlordData = await this._getResource(url);
            overlord = overlordData.name;
        }
        return overlord
    } 

     _transformHouse = (house, overlord) => {
 
        return {
            id: house.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/houses\//,''),
            name: GotService._valid(house.name),
            region: GotService._valid(house.region),
            words: GotService._valid(house.words),
            overlord: overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            id: book.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/books\//,''),
            name: GotService._valid(book.name),
            numberOfpages: GotService._valid(book.numberOfPages),
            publisher: GotService._valid(book.publisher),
            released: GotService._valid(book.released) 
        }
    }
}
