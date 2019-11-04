class Sponsors {
    constructor(
        cash = [40000, 5000, 30400, 12000],
        eu = ['SRL', 'PLO', 'J&K'], 
        rus = ['RusAuto', 'SBO'],
        other = []) {
            this.cash = cash;
            this.eu = eu;
            this.rus = rus;
            this.other = other;
    }

    addSponsor(sponsor = '') {
        if (sponsor.length > 0) {
            this.other.push(sponsor);
            return true;
        }
        return false;
    }

    calcCash (everyCash = this.cash, total = 0) {
        everyCash.forEach(element => {
            total += element;
        });
    
        return total;
    }; 
    
    getAllSponsors() {
        return [...this.eu, ...this.rus, ...this.other];
    }

    

}

export default Sponsors;
