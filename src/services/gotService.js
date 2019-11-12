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
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }

    // получение героя по id
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    // получение всех книг
    getBooks() {
        return this.getResource(`/books`);
    }

    // получение книги по номеру
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    // получение списка всех домов
    getAllHouses() {
        return this.getResource(`/houses`);
    }

    // получение дома по номеру
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }


}