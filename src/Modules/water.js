import dom from "./doms";
import loadHome from "./home";

function loadWaterPage() {
    const content = document.querySelector('.content');
    loadHome.createHeader();

    //section 1
    const section1 = dom.createDom('section', null, 'water-section1');
    const section1Right = dom.createDom('div', null, 'water-section1-right');
    const section1Image = dom.createDom('img', null, 'water-section1-image');
    section1Image.src = "images/WaterSplash.png"

    const section1Text = dom.createDom('div', 'section-header', 'water-section1-text');
    section1Text.innerHTML = 'Water Properties';
    const section1FunFact = dom.createDom('div', 'fun-fact', 'water-section1-fact');
    section1FunFact.innerHTML = "Fun Fact: There is the same amount of water on Earth as there was when the Earth was formed. The water from your faucet could contain molecules that dinosaurs drank.";

    section1Right.append(section1Text, section1FunFact)
    section1.append(section1Image, section1Right)

    //section 2
    const section2 = dom.createDom('section', 'section2', 'water-section2');
    const section2left = dom.createDom('div', 'section2-left', 'water-section2-left');
    const section2right = dom.createDom('div', 'section2-right', 'water-section2-right');

    const section2LeftHeader = dom.createDom('div', 'section2-left-header', 'water-section2-left-header');
    section2LeftHeader.innerHTML = 'Structure of Water'
    const section2LeftInfo = dom.createDom('div', 'section2-left-info', 'water-section2-left-info');
    section2LeftInfo.innerHTML = "Water is polar.";

    section2left.append(section2LeftHeader, section2LeftInfo);

    const section2RightImage = dom.createDom('img', 'section2-right-img', 'water-section2-right-img');
    section2RightImage.src = 'images/WaterMoleculeModel.png';
    const section2RightContent = dom.createDom('div', 'section2-right-content');
    const section2RightHeader = dom.createDom('div', 'section2-right-header', 'water-section2-right-header');
    section2RightHeader.innerHTML = 'Water Molecule Bonds'
    const section2RightInfo = dom.createDom('div', 'section2-right-info', 'water-section2-tight-info');
    section2RightInfo.innerHTML = 'Hydrogen Bonds';
    section2RightContent.append(section2RightHeader, section2RightInfo);
    section2right.append(section2RightImage, section2RightContent);

    section2.append(section2left, section2right)

    content.append(section1, section2);
}

export default loadWaterPage;