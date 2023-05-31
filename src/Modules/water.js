import dom from "./doms";
import loadHome from "./home";

function loadWaterPage() {
    const content = document.querySelector('.content');
    loadHome.createHeader();

    //section 1
    const section1 = dom.createDom('section', 'section1', 'macro-section1');
    section1.innerHTML = `
        <div class='section1-left-text'>
            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">W</span> <span class ="letter">a</span> <span class ="letter">t</span> <span class ="letter">e</span> <span class ="letter">r</span>
                </p>

                <p class='word fancy'>
                <span class ="letter">p</span>  <span class ="letter">r</span>  <span class ="letter">o</span>  <span class ="letter">p</span>  <span class ="letter">e</span>  <span class ="letter">r</span> <span class ="letter">t</span> <span class ="letter">i</span> <span class ="letter">e</span> <span class ="letter">s</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">C</span>  <span class ="letter">o</span>  <span class ="letter">h</span>  <span class ="letter">e</span>  <span class ="letter">s</span>  <span class ="letter">i</span> <span class ="letter">o</span> <span class ="letter">n</span>
                </p>
                <p class='word fancy'>
                <span class ="letter filler">w</span> <span class ="letter">a</span>  <span class ="letter">d</span>  <span class ="letter">h</span>  <span class ="letter">e</span>  <span class ="letter">s</span> <span class ="letter">i</span> <span class ="letter">o</span> <span class ="letter">n</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">h</span><span class ="letter">i</span><span class ="letter">g</span><span class ="letter">h</span>
                </p>

                <p class='word fancy'>
                    <span class ="letter">s</span>  <span class ="letter">p</span> <span class ="letter">e</span> <span class ="letter">c</span>  <span class ="letter">i</span> <span class ="letter">f</span> <span class ="letter">i</span> <span class ="letter">c</span>
                </p>
                <p class='word fancy'>
                <span class ="letter">h</span><span class ="letter">e</span><span class ="letter">a</span><span class ="letter">t</span>
                </p>
            </div> 
        </div>
    `

    //section 2
    const section2 = dom.createDom('section', 'section2', 'water-section2');
    const section2left = dom.createDom('div', 'section2-left', 'water-section2-left');
    const section2right = dom.createDom('div', 'section2-right', 'water-section2-right');

    const section2LeftHeader = dom.createDom('div', 'section2-left-header', 'water-section2-left-header');
    section2LeftHeader.innerHTML = 'Structure of Water'
    const section2LeftInfo = dom.createDom('div', 'section2-left-info', 'water-section2-left-info');
    section2LeftInfo.innerHTML = `
    <ul class="section2-left-info">
        <li class='info'>A water molecule consists of two hydrogen atoms and one oxygen atom.</li>
        <li class='info'>A water molecule has a bent shape.</li>
        <li class='info'>Because of the higher electronegativity of the oxygen atom, the bonds are polar covalent (polar bonds).</li>
        <li class='info'>The oxygen atom acquires a partial negative charge, while the hydrogen atom acquires a partial positive charge.</li>
    </ul>
    `;

    section2left.append(section2LeftHeader, section2LeftInfo);

    const section2RightImage = dom.createDom('img', 'section2-right-img', 'water-section2-right-img');
    section2RightImage.src = 'images/WaterMoleculeModel.png';
    const section2RightContent = dom.createDom('div', 'section2-right-content');
    const section2RightHeader = dom.createDom('div', 'section2-right-header', 'water-section2-right-header');
    section2RightHeader.innerHTML = 'Water Molecule Bonds'
    const section2RightInfo = dom.createDom('div', 'section2-right-info', 'water-section2-tight-info');
    section2RightInfo.innerHTML = `
    <ul class='section2-right-info'>
        <li class='info'>Covalent bonds form between the Hydrogen and Oxygen atoms.</li>
        <li class='info'>Hydrogen bonds form between neighboring hydrogen and oxygen atoms of adjacent water molecules. This is what gives water its cohesion and adhesion properties.</li>
    </ul>
    `;
    section2RightContent.append(section2RightHeader, section2RightInfo);
    section2right.append(section2RightImage, section2RightContent);

    section2.append(section2left, section2right)

    //section 3
    const section3 = dom.createDom('section', 'section3', 'water-section3');
    const section3Content = dom.createDom('section', 'section3-content', 'water-section3-content');
    const section3left = dom.createDom('div', 'section3-left', 'water-section3-left');
    const section3mid = dom.createDom('div', 'section3-mid', 'water-section3-mid');
    const section3right = dom.createDom('div', 'section3-right', 'water-section3-right');
    const section3LeftPart = dom.createDom('div', 'section3-left-part', 'water-section3-left-part');
    const section3LeftPartTop = dom.createDom('div', 'section3-left-part-top', 'water-section3-left-part-top');
    const section3LeftPartBot = dom.createDom('div', 'section3-left-part-bot', 'water-section3-left-part-bot');
    const blackBottom = dom.createDom('div', 'black-bottom');
    section3LeftPart.append(section3LeftPartTop,section3LeftPartBot);

    const section3LeftHeader = dom.createDom('div', 'section3-header', 'water-section3-left-header');
    section3LeftHeader.innerHTML = 'Cohesion'
    const section3LeftInfo = dom.createDom('div', 'section3-info', 'water-section3-left-info');
    section3LeftInfo.innerHTML =     
    `<ul class="section3-info">
        <li class='info'>Cohesion - the attraction of water molecules to other water molecules. This is possible due to their ability to form hydrogen bonds with one another.</li>
        <li class='info'>This is what allows water to stick together and form bodies of water. Ex: lakes, ponds, etc.</li>
        <li class='info'>Is responsible for surface tension, a phenomenon that results in the tendency of a liquid’s surface to resist rupture when placed under tension or stress.</li>
    </ul>
    `;
    const section3LeftImage = dom.createDom('img', 'section3-img', 'water-section3-left-img')
    section3LeftImage.src = 'images/Cohesion.png';
    section3left.append(section3LeftHeader, section3LeftInfo, section3LeftImage);

    const section3MidHeader = dom.createDom('div', 'section3-header', 'water-section3-mid-header');
    section3MidHeader.innerHTML = 'Adhesion'
    const section3MidInfo = dom.createDom('div', 'section3-info', 'water-section3-mid-info');
    section3MidInfo.innerHTML =     
    `<ul class="section3-info">
        <li class='info'>Adhesion - the attraction of molecules of one kind for molecules of a different kind.</li>
        <li class='info'>This is what allows for capillary action, which depends on the attraction between water molecules and the walls of the tube (adhesion), as well as the interactions between water molecules (cohesion).</li>
        <li class='info'>Plants rely of cohesion and adhesion in order help bring water up through its roots and disperse it throughout the plant.</li>
    </ul>
    `;
    const section3MidImage = dom.createDom('img', 'section3-img', 'water-section3-mid-img')
    section3MidImage.src = 'images/Adhesion.png';
    section3mid.append(section3MidHeader, section3MidInfo, section3MidImage);

    const section3RightHeader = dom.createDom('div', 'section3-header', 'water-section3-right-header');
    section3RightHeader.innerHTML = 'Specific Heat'
    const section3RightInfo = dom.createDom('div', 'section3-info', 'water-section3-right-info');
    section3RightInfo.innerHTML = `
    <ul class="section3-info">
        <li class='info'>Specific Heat - the amount of heat needed to raise the temperature of one gram of a substance by one degree Celsius. </li>
        <li class='info'>Water's high specific heat is one of the reasons that water is essential to life. This means that water "takes longer" to heat up as it requires more energy. </li>
        <li class='info'>The high specific heat of water is significant since it allows water to act as a thermoregulator, and thus can ensure that numerous systems can remain at the same temperature.</li>
        <li class='info'>Ex: Animals living in marine enviroments don't have to worry about changes in water temperature as it remains relatively stable throughout the year due to water's
         high specific heat. A change in water temperature could devastate an entire community. Thus this is why water's high specific heat is essetnial life.</li>
    </ul>
    `;
    const section3RightImage = dom.createDom('img', 'section3-img', 'water-section3-right-img')
    section3RightImage.src = 'images/Koi.png';
    section3right.append(section3RightHeader, section3RightInfo, section3RightImage);
    section3Content.append(section3LeftPart,section3left, section3mid, section3right);
    section3.append(section3Content, blackBottom);

    //section 4 - sources

    const section4 = dom.createDom('section', 'section4', 'water-section4');
    const section4left = dom.createDom('div', 'section4-left', 'water-section4-left');
    const section4right = dom.createDom('div', 'section4-right', 'water-section4-right');

    const section4Header = dom.createDom('div', 'section4-header', 'water-section4-header');
    section4Header.innerHTML = 'Sources'
    const section4Sources = dom.createDom('div', 'section4-sources', 'water-section4-sources');
    section4Sources.innerHTML = `
    <div>
        <p>“15.1: Structure of Water.” Chemistry LibreTexts, 8 August 2022,</p>
        <a href ='https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/15%3A_Water/15.01%3A_Structure_of_Water'>https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/15%3A_Water/15.01%3A_Structure_of_Water</a>
    </div>
    
    <div>
        <p>“Specific heat, heat of vaporization, and density of water (article).” Khan Academy, </p>
        <a href='https://www.khanacademy.org/science/ap-biology/chemistry-of-life/structure-of-water-and-hydrogen-bonding/a/specific-heat-heat-of-vaporization-and-freezing-of-water'>https://www.khanacademy.org/science/ap-biology/chemistry-of-life/structure-of-water-and-hydrogen-bonding/a/specific-heat-heat-of-vaporization-and-freezing-of-water</a>
    </div>
    
    <div>
        <p>“Cohesion and adhesion of water (article).” Khan Academy, </p>
        <a href='https://www.khanacademy.org/science/ap-biology/chemistry-of-life/structure-of-water-and-hydrogen-bonding/a/cohesion-and-adhesion-in-water'>https://www.khanacademy.org/science/ap-biology/chemistry-of-life/structure-of-water-and-hydrogen-bonding/a/cohesion-and-adhesion-in-water</a>
    </div>
    `
    section4left.append(section4Sources);
    section4.append(section4left, section4right);

    content.append(section1, section2, section3,section4Header, section4);

    loadHome.createFooter();
}

export default loadWaterPage;