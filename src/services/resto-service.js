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
        return await this.getUrl(menu);
    }
}