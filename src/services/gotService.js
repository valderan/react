export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }

    // получение всех героев
    async getAllCharacters() {
        const res =  await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }

    // получение героя по id
    async getCharacter(id) {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res)
    }

    // получение всех книг
    async getBooks() {
        const res = await this.getResource(`/books`);
        return res.map(this._transformBook);
    }

    // получение книги по номеру
    async getBook(id) {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    // получение списка всех домов
    async getAllHouses() {
        const res = await this.getResource(`/houses`);
        return res.map(this._transformHouse);
    }

    // получение дома по номеру
    async getHouse(id) {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
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