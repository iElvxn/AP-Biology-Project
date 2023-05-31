import dom from "./doms";
import loadHome from "./home";

function loadFunctionGroupsPage() {
    const content = document.querySelector('.content');
    loadHome.createHeader();

    //section 1
    const section1 = dom.createDom('section', 'section1', 'macro-section1');
    section1.innerHTML = `
        <div class='section1-left-text'>
            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">f</span> <span class ="letter">u</span> <span class ="letter">n</span> <span class ="letter">c</span> <span class ="letter">t</span> <span class ="letter">i</span> <span class ="letter">o</span> <span class ="letter">n</span> <span class ="letter">a</span> <span class ="letter">l  
                </p>

                <p class='word fancy'>
                    <span class ="letter filler">a</span><span class ="letter">g</span> <span class ="letter">r</span> <span class ="letter">o</span> <span class ="letter">u</span> <span class ="letter">p</span> <span class ="letter">s</span> 
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">C</span>  <span class ="letter">a</span>  <span class ="letter">r</span>  <span class ="letter">b</span>  <span class ="letter">o</span>  <span class ="letter">x</span> <span class ="letter">y</span> <span class ="letter">l</span>
                </p>
                <p class='word fancy'>
                    <span class ="letter">c</span>  <span class ="letter">a</span>  <span class ="letter">r</span>  <span class ="letter">b</span>  <span class ="letter">o</span> <span class ="letter">n</span> <span class ="letter">y</span> <span class ="letter">l</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">A</span>  <span class ="letter">m</span> <span class ="letter">i</span> <span class ="letter">n</span>  <span class ="letter">e</span>
                </p>
                <p class='word fancy'>
                <span class ="letter">h</span><span class ="letter">y</span><span class ="letter">d</span><span class ="letter">r</span><span class ="letter">o</span><span class ="letter">x</span><span class ="letter">y</span><span class ="letter">l</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">P</span><span class ="letter">h</span><span class ="letter">o</span><span class ="letter">s</span> <span class ="letter">P</span><span class ="letter">h</span><span class ="letter">a</span><span class ="letter">t</span><span class ="letter">e</span>
                </p>

                <p class='word fancy'>
                    <span class ="letter">m</span>  <span class ="letter">e</span> <span class ="letter">t</span> <span class ="letter">h</span>  <span class ="letter">y</span>  <span class ="letter">l</span>
                </p>
            </div>
            
        </div>
    `

    //section 3
    const section3 = dom.createDom('section', 'section3', 'macro-section3');
    const section3Content = dom.createDom('section', 'section3-content', 'functional-group-section3-content');

    section3Content.innerHTML = `
        <div class='card-track' id='functional-group-card-track' data-mouse-down-at="0" data-prev-percentage="0">
            <div class="section3-card" id="proteins-card">
                <h1 class='section3-header'>Carbonyl</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Carbonyls?</div>
                            <ul class='section3-info'>
                                <li class='info'>A carbonyl group is a chemically organic functional group composed of a carbon atom double-bonded to an oxygen atom.</li>
                                <li class='info'>Two main types are Ketones and Aldehydes</li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Typically part of sugars.</li>
                                <li class='info'>Reactive</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Carbonyl.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="lipids-card">
                <h1 class='section3-header'>Carboxyl</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Carboxyls?</div>
                            <ul class='section3-info'>
                                <li class='info'>Carboxyl groups are a combination of two functional groups attached to a single carbon atom, namely, hydroxyl (single-bonded OH) and carbonyl (double bonded O) groups.</li>
                                <li class='info'>The main compound is carboxylic acid.</li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Acts as an acid</li>
                                <li class='info'>Polar</li>
                                <li class='info'>Organic Acid</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Carboxyl.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="nucleic-acids-card">
                <h1 class='section3-header'>Sulfhydryl</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Sulfhydryls?</div>
                            <ul class='section3-info'>
                                <li class='info'>The sulfhydryl group is a functional group that contains a sulfur-hydrogen bond.</li>
                                <li class='info'>The main compound of sulfhydryl is thiol.</li>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Forms a crosslink that stabilizes proteins.</li>
                                <li class='info'>Slightly polar</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Sulfhydryl.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="carbohydrates-card">
                <h1 class='section3-header'>Amine</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Amines?</div>
                            <ul class='section3-info'>
                                <li class='info'>An amine is an organic functional group that has a basic nitrogen with a lone pair on it.</li>
                                <li class='info'>The main compound of amine are amino acids.</li>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Acts as a base.</li>
                                <li class='info'>Picks up H+.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Amine.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="lipids-card">
                <h1 class='section3-header'>Methyl</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Methyls?</div>
                            <ul class='section3-info'>
                                <li class='info'>Carboxyl groups are made up of one carbon and three hydrogen atoms</li>
                                <li class='info'>The main compound is a methylated compound.</li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Affects expression of genes when bonded to DNA.</li>
                                <li class='info'>Unreactive.</li>
                                <li class='info'>Nonpolar.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Methyl.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="nucleic-acids-card">
                <h1 class='section3-header'>Phosphate</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Phosphates?</div>
                            <ul class='section3-info'>
                                <li class='info'>A functional group characterized by a phosphorus atom bonded to four oxygen atoms.</li>
                                <li class='info'>The main compound is organic phosphate.</li>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Ability to react with water.</li>
                                <li class='info sub'>Releases energy.</li>
                                <li class='info'>Polar.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='Phosphate-card-img' src='images/Phosphate.png'><img>  
                    </div>
                </div>
            </div>

            <div class="section3-card" id="carbohydrates-card">
                <h1 class='section3-header'>Hydroxyl</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Hydroxyls?</div>
                            <ul class='section3-info'>
                                <li class='info'> A hydroxyl group is a functional group with the chemical formula −OH and composed of one oxygen atom covalently bonded to one hydrogen atom</li>
                                <li class='info'>The main compound of hydroxyls are alochols.</li>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Characteristics</div>
                            <ul class='section3-info'>
                                <li class='info'>Polar</li>
                                <li class='info'>Dissolves compounds like sugar.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot' id='functional-groups-section3-card-bot'>
                        <div class="section3-card-header">Structure</div>
                        <img class="section3-img functional" id='carbonyl-card-img' src='images/Hydroxyl.png'><img>  
                    </div>
                </div>
            </div>
        </div>
    `
   
    const blackBottom = dom.createDom('div', 'black-bottom');
    blackBottom.innerHTML = 'DRAG FOR MORE INFORMATION'

    section3.append(section3Content, blackBottom);

    //section 4 - sources

    const section4 = dom.createDom('section', 'section4', 'macro-section4');
    const section4left = dom.createDom('div', 'section4-left', 'macro-section4-left');
    const section4right = dom.createDom('div', 'section4-right', 'macro-section4-right');

    const section4Header = dom.createDom('div', 'section4-header', 'macro-section4-header');
    section4Header.innerHTML = 'Sources'
    const section4Sources = dom.createDom('div', 'section4-sources', 'macro-section4-sources');
    section4Sources.innerHTML = `
    <div>
        <p>“Amine Functional Group.” ChemTalk, </p>
        <a href ='https://chemistrytalk.org/amine-functional-group/'>https://chemistrytalk.org/amine-functional-group/</a>
    </div>
    
    <div>
        <p>“4.4: Functional Groups.” Chemistry LibreTexts, 13 August 2020, </p>
        <a href='https://chem.libretexts.org/Courses/University_of_Kentucky/UK%3A_CHE_103_-_Chemistry_for_Allied_Health_(Soult)/Chapters/Chapter_4%3A_Structure_and_Function/4.4%3A_Functional_Groups'>https://chem.libretexts.org/Courses/University_of_Kentucky/UK%3A_CHE_103_-_Chemistry_for_Allied_Health_(Soult)/Chapters/Chapter_4%3A_Structure_and_Function/4.4%3A_Functional_Groups</a>
    </div>
    
    <div>
        <p>“Physical Properties of Carboxylic Acids.” Chemistry LibreTexts, 22 January 2023, </p>
        <a href='https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Carboxylic_Acids/Properties_of_Carboxylic_Acids/Physical_Properties_of_Carboxylic_Acids'>https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Carboxylic_Acids/Properties_of_Carboxylic_Acids/Physical_Properties_of_Carboxylic_Acids</a>
    </div>

    <div>
        <p>Rinehart, Kenneth L. “The Carbonyl Group.” Chemistry LibreTexts, 22 January 2023, </p>
        <a href='https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Aldehydes_and_Ketones/Properties_of_Aldehydes_and_Ketones/The_Carbonyl_Group'>https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Aldehydes_and_Ketones/Properties_of_Aldehydes_and_Ketones/The_Carbonyl_Group</a>
    </div>

    <div>
        <p>“Sulfhydryl Group | Structure, Formula & Examples - Video & Lesson Transcript.” Study.com, 13 February 2022,</p>
        <a href='https://study.com/academy/lesson/what-is-a-sulfhydryl-group.html'>https://study.com/academy/lesson/what-is-a-sulfhydryl-group.html</a>
    </div>
    `
    section4left.append(section4Sources);
    section4.append(section4left, section4right);

    content.append(section1, section3,section4Header, section4);

    loadHome.createFooter();
}

export default loadFunctionGroupsPage;