import dom from "./doms";

const loadHome = (() => {
    const content = document.querySelector('.content');

    const  createHeader = () => {
        const header = dom.createDom('header', 'header');
        const logoContainer = dom.createDom('div', 'logoContainer');
        const logo = dom.createDom('img', 'logo');
        logo.src = 'images/Logo.png'
        const logoText = dom.createDom('div', 'logoText');
        logoText.innerHTML = 'Bio Chemistry';
        logoContainer.append(logo, logoText)

        const links = dom.createDom('ul', 'navLinks');
        const home = dom.createDom('li', 'link', 'home-btn');
        home.innerHTML = 'Home';
        const water = dom.createDom('li', 'link', 'water-btn');
        water.innerHTML = 'Water';
        const macromolecules = dom.createDom('li', 'link');
        macromolecules.innerHTML = 'Macromolecules';
        const dna = dom.createDom('li', 'link');
        dna.innerHTML = 'DNA & RNA Structure';
    
        links.append(home, water, macromolecules, dna);
        header.append(logoContainer, links);
        content.append(header);
    }
    
    const createHomePage = () => {
        //Section 1
        const section1 = dom.createDom('section', null, 'home-section1');
        const section1Left = dom.createDom('div', null, 'home-section1-left');
        const section1Image = dom.createDom('img', null, 'home-section1-image');
        section1Image.src = "images/DNA1.png"

        const section1Text = dom.createDom('div', 'section-header', 'home-section1-text');
        section1Text.innerHTML = 'EXPLORE BIOCHEMISTRY';
        const section1FunFact = dom.createDom('div', 'fun-fact', 'home-section1-fact');
        section1FunFact.innerHTML = "Fun Fact: If one person's DNA was unraveled and placed end to end, it would stretch from Pluto and back.";

        const section1Btn = dom.createDom('button', null, 'learn-more-btn')
        section1Btn.innerHTML = 'LEARN MORE'

        section1Left.append(section1Text, section1FunFact, section1Btn);


        section1.append(section1Left,section1Image);
        //Section 2

        const section2 = dom.createDom('section', null, 'home-section2');
        const section2Content = dom.createDom('section', null, 'home-section2-content')

        const waterSection = createInfoCard('WATER', "Dive into the fascinating world of water and explore its unique properties that make it essential for life.")
        const macroMoleculesSection = createInfoCard('MACRO MOLECULES', "Delve into the intricate world of macromolecules, the building blocks of life.")
        const dnaSection = createInfoCard('DNA/RNA', "Uncover the secrets of the genetic code within our cells.")

        function createInfoCard(title, info, image) {
            let spaceRemovedString = title.split(" ").join("");
            spaceRemovedString = spaceRemovedString.split("/").join("");

            const card = dom.createDom('div', 'info-cards', spaceRemovedString.toLowerCase() + "-card");
            const cardtitle = dom.createDom('div', 'infoCardTitle', spaceRemovedString.toLowerCase() + "-title");
            cardtitle.innerHTML = title;
            const cardInfo = dom.createDom('div', 'infoCardInfo');
            cardInfo.innerHTML = info;
            const cardImage = dom.createDom('image', 'infoCardImage', spaceRemovedString.toLowerCase() + "-gif");
            const btn = dom.createDom('button', 'info-btn', spaceRemovedString.toLowerCase() + "-btn");
            btn.innerHTML = 'EXPLORE'

            card.append(cardtitle, cardInfo, cardImage, btn);
            return(card);
        }


        section2Content.append(waterSection, macroMoleculesSection, dnaSection);
        section2.appendChild(section2Content);

        content.append(section1, section2);
    }

    const loadHomePage = () => {
        createHeader();
        createHomePage();
    }

    return { createHeader, createHomePage, loadHomePage }
})();


export default loadHome;