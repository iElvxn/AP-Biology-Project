import domEvents from "./doms";

function loadHome() {
    function createHeader() {
        const header = domEvents.createDom('header', 'header', null);
        header.innerHTML = 'Bio Chemistry';
    
        const links = domEvents.createDom('ul', 'navLinks');
        const home = domEvents.createDom('li', 'link');
        home.innerHTML = 'Home';
        const water = domEvents.createDom('li', 'link');
        water.innerHTML = 'Water';
        const macromolecules = domEvents.createDom('li', 'link');
        macromolecules.innerHTML = 'Macromolecules';
        const dna = domEvents.createDom('li', 'link');
        dna.innerHTML = 'DNA & RNA Structure';
    
        links.append(home, water, macromolecules, dna);
        header.appendChild(links);
        document.body.append(header);
    }
    
    function createHomePage() {

    }

    createHeader();
    createHomePage();

}

export default loadHome;