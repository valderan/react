class Business {
    constructor({owner = '', director = 'Victor', cash = 0, emp = [], sponsors = []} ={}) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp,
        this.sponsors = sponsors;
    }

    show() {
        const [riskSponsor] = this.sponsors;
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers:${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...this.sponsors);
        console.log(`Note. Be careful with ${riskSponsor}. It's a huge risk.`);    
    }

}

export default Business;