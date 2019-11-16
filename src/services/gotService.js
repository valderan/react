export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
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
        return res.map(this._transformHouse);
    }

    // получение дома по номеру
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    static _valid = (str) => {
        return str.trim(' ').length !== 0 ? str : 'no data';
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

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            number: book.number,
            publisher: book.publisher,
            released: book.released 
        }
    }
}
