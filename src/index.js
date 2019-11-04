import Employers from "./modules/employers";
import Sponsors from "./modules/sponsors";
import Business from "./modules/business";

const employers = new Employers();
const sponsors = new Sponsors();
sponsors.addSponsor('unexpected sponsor');

const makeBusiness = new Business({
    owner:'Sam', 
    cash: sponsors.calcCash(), 
    emp: employers.getNames(),
    sponsors: sponsors.getAllSponsors()
});

makeBusiness.show();

