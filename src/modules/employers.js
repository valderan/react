class Employers {
    constructor(employers = []) {
        this.employers = (employers.length != 0 ) ? employers : ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
        this.employers = this.employers.filter(name => name.length > 0)
                                        .map(name => name.toLocaleLowerCase().trim());
    }

    getNames() {
        return this.employers;
    }

    display() {
        console.log('Employers Names: ', this.employers);
    }
}

export default Employers;