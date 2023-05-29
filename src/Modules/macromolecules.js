import dom from "./doms";
import loadHome from "./home";

function loadMacroPage() {
    const content = document.querySelector('.content');
    loadHome.createHeader();

    //section 1
    const section1 = dom.createDom('section', 'section1', 'macro-section1');
    section1.innerHTML = `
        <div class='section1-left-text'>
            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">M</span>
                    <span class ="letter">a</span>
                    <span class ="letter">c</span>
                    <span class ="letter">r</span>
                    <span class ="letter">o</span>
                    <span class ="letter">m</span>
                    <span class ="letter">o</span>
                    <span class ="letter">l</span>
                    <span class ="letter">e</span>
                    <span class ="letter">c</span>
                    <span class ="letter">u</span>
                    <span class ="letter">l</span>
                    <span class ="letter">e</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">P</span>  <span class ="letter">r</span>  <span class ="letter">o</span>  <span class ="letter">t</span>  <span class ="letter">e</span>  <span class ="letter">i</span>  <span class ="letter">n</span>
                </p>
                <p class='word fancy'>
                    <span class ="letter">L</span>  <span class ="letter">i</span>  <span class ="letter">p</span>  <span class ="letter">i</span>  <span class ="letter">d</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">N</span>  <span class ="letter">u</span> <span class ="letter">c</span> <span class ="letter">l</span>  <span class ="letter">e</span>  <span class ="letter">i</span>  <span class ="letter">c</span>
                </p>
                <p class='word fancy'>
                    <span class ="letter">A</span> <span class ="letter">c</span> <span class ="letter">i</span> <span class ="letter">d</span>
                </p>
            </div>

            <div class='line'>
                <p class='word fancy'>
                    <span class ="letter">C</span> <span class ="letter">a</span> <span class ="letter">r</span> <span class ="letter">b</span> <span class ="letter">o</span> <span class ="letter">h</span> <span class ="letter">y</span> <span class ="letter">d</span> <span class ="letter">r</span> <span class ="letter">a</span> <span class ="letter">t</span> <span class ="letter">e</span><span class ="letter">s</span>
                </p>
            </div>
        </div>
    `

    //section 2
    const section2 = dom.createDom('section', 'section2', 'macro-section2');
    const section2left = dom.createDom('div', 'section2-left', 'macro-section2-left');
    const section2right = dom.createDom('div', 'section2-right', 'macro-section2-right');

    const section2LeftHeader = dom.createDom('div', 'section2-left-header', 'macro-section2-left-header');
    section2LeftHeader.innerHTML = 'What Are Macromolecules?'
    const section2LeftInfo = dom.createDom('div', 'section2-left-info', 'macro-section2-left-info');
    section2LeftInfo.innerHTML = `
    <ul class="section2-left-info">
        <li class='info'>Macromolecules are large, organic molecules such as carbohydrates, lipids, proteins, and nucleic acids.</li>
        <li class='info'>Many macromolecules are polymers, which is a molecule made up of polymers.</li>
        <li class='info'>Monomers - A molecule that is a building block for larger molecules (polymers). For example, an amino acid acts as the building blocks for proteins.</li>
        <li class='info'>The four main macromolecules are proteins, lipids, nucleic acids, and carbohydrates.</li>
        <li class='info'>Dehydration synthesis - the joining of molecules by removing a water molecule.</li>
        <li class='info'>Hydrolysis - the breaking down of molecules by adding a water molecule.</li>
    </ul>
    `;

    section2left.append(section2LeftHeader, section2LeftInfo);

    const section2RightImage = dom.createDom('img', 'section2-right-img', 'macro-section2-right-img');
    section2RightImage.src = 'images/aminoacid.png';
    const section2RightContent = dom.createDom('div', 'section2-right-content', 'macro-section2-right-content');
    const section2RightHeader = dom.createDom('div', 'section2-right-header', 'macro-section2-right-header');
    section2RightHeader.innerHTML = 'Monomer'
    const section2RightInfo = dom.createDom('div', 'section2-right-info', 'macro-section2-tight-info');
    section2RightInfo.innerHTML = `
    <ul class='section2-right-info'>
        <li class='info'>Amino acid.</li>
        <li class='info'>Amino acids are monomers used to build a polymer called proteins. Their R group characterizes them.</li>
    </ul>
    `;
    section2RightContent.append(section2RightHeader, section2RightInfo);
    section2right.append(section2RightImage, section2RightContent);

    section2.append(section2left, section2right)

    //section 3
    const section3 = dom.createDom('section', 'section3', 'macro-section3');
    const section3Content = dom.createDom('section', 'section3-content', 'macro-section3-content');

    section3Content.innerHTML = `
        <div class='card-track' id='macro-section3-card-track' data-mouse-down-at="0" data-prev-percentage="0">
            <div class="section3-card" id="proteins-card">
                <h1 class='section3-header'>Proteins</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Proteins?</div>
                            <ul class='section3-info'>
                                <li class='info'>Proteins are a type of macromolecule that are composed of monomers called amino acids that are linked into polymers by bonds known as peptide bonds to create proteins.</li>
                                <li class='info'>Amino acids are formed by attaching an amine group, a carboxyl group, and a R-group to a central atom of carbon.</li>
                                <li class='info'>There are 20 common amino acids, and they differ by their R Groups which gives them characteristics like polar/hydrophilic, nonpolar/hydrophobic.</li>
                                <li class='info'>Proteins are created through the linkage of amino acids via peptide bonds, earning them the alternative name of polypeptides. The formation of peptide bonds between these amino acids occurs through a process known as dehydration synthesis. </li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Functions</div>
                            <ul class='section3-info'>
                                <li class='info'>Proteins' functions are determined by their shape. Any changes, such as denaturation, to the protein's shape may cause the protein to be unfunctional.</li>
                                <li class='info'>Enzymes are proteins that help facilitate biochemical reactions in our bodies by decreasing the activation energy necessary for a chemical reaction to occur.</li>
                                <li class='info'>Transport: transport proteins carry small molecules and ions across cell membranes and throughout the body. Some examples are carrier and channel proteins.</li>
                                <li class='info'>Signaling: proteins are involved in cell signaling pathways, transmitting signals within and between cells. Receptor proteins on cell membranes detect and bind to specific molecules, triggering a cascade of intracellular events.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot'>
                        <div class='section3-card-bot-left' id='section3-card-img'>
                            <div class="section3-card-header">Structure</div>
                            <ul class='section3-info'>
                                <li class='info'>The four structure types are primary, secondary, tertiary, and quaternary.</li>
                                <li class='info'>The primary structure of a protein is the unique sequence of a string of amino acids.</li>
                                <li class='info'>The secondary structure of a protein refers to its local folding patterns, such as alpha helices and beta sheets. The hydrogen bonds cause the amino acid chain to fold or coil.</li>
                                <li class='info'>The tertiary structure of a protein refers to its 3D spatial conformation, or in other words, how its secondary structure (its alpha helix or beta sheet or both) folds itself up in its interior. </li>
                                <li class='info'>The quaternary structure of a protein refers to the arrangement and interaction of multiple protein subunits to form a functional protein complex. </li>
                            </ul>
                        </div>

                        <div class='section3-card-bot-right' id="section3-card-img-container">
                            <img class="section3-card-img" id='protein-card-img'><img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section3-card" id="lipids-card">
                <h1 class='section3-header'>Lipids</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Lipids?</div>
                            <ul class='section3-info'>
                                <li class='info'>Lipids are a type of macromolecule that are composed of carbon, hydrogen, and oxygen atoms.</li>
                                <li class='info'>Lipids are grouped together because of their hydrophobic qualities, as a result, all lipids are insoluble in water.</li>
                                <li class='info'>There are three main families of lipids: fats, phospholipids, and steroids. Let’s look at each of these in a bit more detail down below.</li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Functions</div>
                            <ul class='section3-info'>
                                <li class='info'>Fats: Fats are incredibly important for energy storage and protects the organs as well as insulate the body.</li>
                                <li class='info'>Phospholipids: Phospholipids serve essential functions in the structure of cell membranes. The structure of phospholipids allows them to form bilayers in cell membranes, creating a barrier between the cell and its environment.</li>
                                <li class='info'>Steroids: Cholesterol is a component of the plasma membranes in animal cells that helps keep membranes flexible and fluid. It is also the precursor to many other important steroids, such as the sex hormones testosterone, estradiol, and progesterone.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot'>
                        <div class='section3-card-bot-left' id='section3-card-img'>
                            <div class="section3-card-header">Types</div>
                            <ul class='section3-info'>
                                <li class='info'>Fats: consists of three fatty acid molecules bonded to a glycerol molecule. Thus they are also know as triglycerides.</li>
                                <li class='info sub'>The fatty acids are linked to the glycerol backbone through the process of dehydration synthesis.</li>
                                <li class='info sub'>Saturated fats contain only single bonds between carbon atoms. Unsaturated fatty acids have at least one double bond in their chains.</li>
                                <li class='info'>Phospholipids: consists of two fatty acids and a phosphate group (PO4) bound to glycerol. </li>
                                <li class='info sub'>While the fatty acid tails are hydrophobic, the PO4 head of a phospholipid is hydrophilic. </li>
                                <li class='info'>Steroids: has a distinct structure containing four fused carbon rings. </li>
                                <li class='info sub'>Examples include cholesterol, which is an essential component of cell membranes and serves as a precursor for steroid hormones.</li>
                            </ul>
                        </div>

                        <div class='section3-card-bot-right' id="section3-card-img-container">
                            <img class="section3-card-img" id='lipids-card-img'><img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section3-card" id="nucleic-acids-card">
                <h1 class='section3-header'>Nucleic Acids</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Nucleic Acids?</div>
                            <ul class='section3-info'>
                                <li class='info'>Nucleic acids are macromolecules made out of units called nucleotides. </li>
                                <li class='info sub'>Each nucleotide in DNA contains one of four possible nitrogenous bases: adenine (A), guanine (G) cytosine (C), and thymine (T).</li>
                                <li class='info sub'>In RNA thymine (T) is replaced with uracil (U).</li>
                                <li class='info'>They carry the genetic blueprint of a cell and carry instructions for the functioning of the cell.</li>
                                <li class='info'>There are two main naturally occurring varieties: deoxyribonucleic acid (DNA) and ribonucleic acid (RNA). Let’s look at both of these in a bit more detail down below.</li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">DNA/RNA</div>
                            <ul class='section3-info'>
                                <li class='info'>DNA is the genetic material found in all living organisms,</li>
                                <li class='info sub'>It is found in the nucleus of eukaryotes and in the organelles, chloroplasts, and mitochondria.</li>
                                <li class='info'>Messenger RNA (mRNA) serves as a messenger between DNA and the ribosomes, molecular machines that read mRNA sequences and use them to build proteins.</li>
                                <li class='info sub'>mRNA trasnscribes the DNA, and is translated b the ribosome.</li>
                                <li class='info'>Ribosomal RNAs (rRNAs) serve as structural components of ribosomes.</li>
                                <li class='info'>Transfer RNAs (tRNAs) are RNA molecules that bring amino acids to the ribosome for protein synthesis.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot'>
                        <div class='section3-card-bot-left'>
                            <div class="section3-card-header">Structure</div>
                            <ul class='section3-info'>
                                <li class='info'>DNA and RNA are polymers (in the case of DNA, often very long polymers), and are made up of monomers known as nucleotides.</li>
                                <li class='info'>Adenine and guanine are purines, meaning that their structures contain two fused carbon-nitrogen rings. Cytosine, thymine and uracil, in contrast, are pyrimidines and have a single carbon-nitrogen ring. </li>
                                <li class='info'>The five-carbon sugar in DNA is called deoxyribose, while in RNA, the sugar is ribose. </li>
                                <li class='info'>Nucleotides may have a single phosphate group, or a chain of up to three phosphate groups, attached to the 5’ carbon of the sugar.</li>
                                <li class='info'>DNA, chains are typically found in a double helix. </li>
                                <li class='info'>The sugars and phosphates lie on the outside of the helix, forming the backbone of the DNA: called the sugar-phosphate backbone.</li>
                                <li class='info'>The nitrogenous bases extend into the interior, like the steps of a staircase, in pairs; the bases of a pair are bound to each other by hydrogen bonds.</li>
                            </ul>
                        </div>

                        <div class='section3-card-bot-right' id="section3-card-img-container">
                            <img class="section3-card-img" id='dnarna-card-img'><img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section3-card" id="carbohydrates-card">
                <h1 class='section3-header'>Carbohydrates</h1>
                <div class='section3-card-content'>
                    <div class='section3-card-top'>
                        <div class='section3-card-top-left'>
                            <div class="section3-card-header">What Are Carbohydrates?</div>
                            <ul class='section3-info'>
                                <li class='info'>Carbohydrates, are energy storing organic compound molecules made up of carbon, hydrogen, and oxygen in a 1:2:1 ratio. </li>
                                <li class='info sub'>All carbohydrates are made up of sugar monomers. </li>
                                <li class='info'>Carbohydrate chains come in different lengths, and biologically important carbohydrates belong to three categories: monosaccharides, disaccharides, and polysaccharides. </li>
                            </ul>
                        </div>

                        <div class='section3-card-top-right'>
                            <div class="section3-card-header">Functions</div>
                            <ul class='section3-info'>
                                <li class='info'>Polysaccharides serve important functions with regards to cell structure and storage in both plants and animals.</li>
                                <li class='info'>In plants, cellulose is essential for making cell walls and providing structure.</li>
                                <li class='info'> Starch is necessary for sugar storage. </li>
                                <li class='info sub'>Has two primary forms: amylose and amylopectin.</li>
                                <li class='info'>Glycogen is the storage form of glucose in humans and other vertebrates.</li>
                                <li class='info sub'>Glycogen is usually stored in liver and muscle cells. Whenever blood glucose levels decrease, glycogen is broken down via hydrolysis to release glucose monomers that cells can absorb and use.</li>
                            </ul>
                        </div>
                    </div>

                    <div class='section3-card-bot'>
                        <div class='section3-card-bot-left'>
                            <div class="section3-card-header">Types</div>
                            <ul class='section3-info'>
                                <li class='info'>Monosaccharides- simple sugars that have a single sugar monomer.</li>
                                <li class='info sub'>The three main examples of monosaccharides are glucose, fructose, and galactose.</li>
                                <li class='info'>Disaccharides form when two monosaccharides join together via dehydration synthesis or condesation.</li>
                                <li class='info sub'> The prefix di-, meaning two, have two sugar subunits. </li>
                                <li class='info sub'>The main types of disaccharides to know are maltose, lactose, and sucrose.</li>
                                <li class='info'>Polysaccharide - a long chain of monosaccharides linked by glycosidic bonds.</li>
                            </ul>
                        </div>

                        <div class='section3-card-bot-right' id="section3-card-img-container">
                            <img class="section3-card-img" id='dnarna-card-img'><img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
   
    const blackBottom = dom.createDom('div', 'black-bottom');

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
        <p>“Carbohydrates (article) | Chemistry of life.” Khan Academy, </p>
        <a href ='https://www.khanacademy.org/science/ap-biology/chemistry-of-life/properties-structure-and-function-of-biological-macromolecules/a/carbohydrates'>https://www.khanacademy.org/science/ap-biology/chemistry-of-life/properties-structure-and-function-of-biological-macromolecules/a/carbohydrates</a>
    </div>
    
    <div>
        <p>“Nucleic acids (article).” Khan Academy, </p>
        <a href='https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/dna-and-rna-structure/a/nucleic-acids'>https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/dna-and-rna-structure/a/nucleic-acids</a>
    </div>
    
    <div>
        <p>“Proteins: AP® Biology Crash Course Review.” Albert.io, 1 March 2022, </p>
        <a href='https://www.albert.io/blog/proteins-ap-biology-crash-course/'>https://www.albert.io/blog/proteins-ap-biology-crash-course/</a>
    </div>

    <div>
        <p>“3.5 Nucleic Acids - Biology for AP® Courses.” OpenStax, 8 March 2018, </p>
        <a href='https://openstax.org/books/biology-ap-courses/pages/3-5-nucleic-acids'>https://openstax.org/books/biology-ap-courses/pages/3-5-nucleic-acids</a>
    </div>

    <div>
        <p>“3.3 Lipids - Biology for AP® Courses.” OpenStax, 8 March 2018, </p>
        <a href='https://openstax.org/books/biology-ap-courses/pages/3-3-lipids'>https://openstax.org/books/biology-ap-courses/pages/3-3-lipids</a>
    </div>
    `
    section4left.append(section4Sources);
    section4.append(section4left, section4right);

    content.append(section1, section2, section3,section4Header, section4);

    loadHome.createFooter();
}

export default loadMacroPage;