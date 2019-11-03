const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(name => name.length > 0);

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }

console.log('employersNames: ', employersNames);

// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

employersNames = employersNames.map(name => name.toLocaleLowerCase().trim());
console.log('employersNames: ', employersNames);

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// function calcCash(own) {
//     own = own || 0;
//     var everyCash = Array.prototype.slice.call(arguments);
//     var total = own;
//     for (var i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }

const calcCash = (everyCash, total = 0) => {

    everyCash.forEach(element => {
        total += element;
    });

    return total;
};

const money = calcCash(sponsors.cash);
console.log('money: ', money);

// function makeBusiness(owner, director, cash, emp) {
//     director = director || 'Victor';
//     var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
//     console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
//     emp);
//     console.log('And we have a sponsors: ');
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);

const makeBusiness = ({
    owner = '',
    director = 'Victor',
    cash = 0,
    emp = []
} = {}) => {
    const allSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'],
        [riskSponsor] = allSponsors;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...allSponsors);
    console.log(`Note. Be careful with ${riskSponsor}. It's a huge risk.`);
}

makeBusiness({
    owner:'Sam', 
    cash: money, 
    emp: employersNames
});


