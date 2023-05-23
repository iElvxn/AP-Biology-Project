import domEvents from "./doms";

function loadHome() {
    const content = document.querySelector('.content');
    function createHeader() {
        const header = domEvents.createDom('header', 'header');
        const logoContainer = domEvents.createDom('div', 'logoContainer');
        const logo = domEvents.createDom('img', 'logo');
        logo.src = 'images/Logo.png'
        const logoText = domEvents.createDom('div', 'logoText');
        logoText.innerHTML = 'Bio Chemistry';
        logoContainer.append(logo, logoText)

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
        header.append(logoContainer, links);
        content.append(header);
    }
    
    function createHomePage() {
        //Section 1
        const section1 = domEvents.createDom('section', null, 'home-section1');
        const section1Left = domEvents.createDom('div', null, 'home-section1-left');
        const section1Image = domEvents.createDom('img', null, 'home-section1-image');
        section1Image.src = "images/DNA1.png"

        const section1Text = domEvents.createDom('div', null, 'home-section1-text');
        section1Text.innerHTML = 'EXPLORE BIOCHEMISTRY';
        const section1FunFact = domEvents.createDom('div', null, 'home-section1-fact');
        section1FunFact.innerHTML = "Fun Fact: If one person's DNA was unraveled and placed end to end, it would stretch from Pluto and back.";

        const section1Btn = domEvents.createDom('button', 'learn-more-btn')
        section1Btn.innerHTML = 'LEARN MORE'

        section1Left.append(section1Text, section1FunFact, section1Btn);


        section1.append(section1Left,section1Image);
        //Section 2

        const section2 = domEvents.createDom('section', null, 'home-section2');
        const section2Content = domEvents.createDom('section', null, 'home-section2-content')

        const waterSection = createInfoCard('WATER', "Dive into the fascinating world of water and explore its unique properties that make it essential for life.")
        const macroMoleculesSection = createInfoCard('MACRO MOLECULES', "Delve into the intricate world of macromolecules, the building blocks of life.")
        const dnaSection = createInfoCard('DNA/RNA', "Uncover the secrets of the genetic code within our cells.")

        function createInfoCard(title, info, image) {
            const card = domEvents.createDom('div', 'info-cards');
            const cardtitle = domEvents.createDom('div', 'infoCardTitle');
            cardtitle.innerHTML = title;
            const cardInfo = domEvents.createDom('div', 'infoCardInfo');
            cardInfo.innerHTML = info;
            let spaceRemovedString = title.split(" ").join("");
            spaceRemovedString = spaceRemovedString.split("/").join("");
            console.log(spaceRemovedString)
            const cardImage = domEvents.createDom('image', 'infoCardImage', spaceRemovedString.toLowerCase() + "-gif");

            card.append(cardtitle, cardInfo, cardImage);
            return(card);
        }


        section2Content.append(waterSection, macroMoleculesSection, dnaSection);
        section2.appendChild(section2Content);

        content.append(section1, section2);
    }

    createHeader();
    createHomePage();
}

export default loadHome;