import loadHome from "./home";
import loadWaterPage from "./water";
import loadMacroPage from "./macromolecules";

const dom = (() => {

    const domEvents = () => {
        const homeBtn = document.querySelectorAll('#home-btn');
        const waterBtn = document.querySelectorAll('#water-btn');
        const macromoleculesBtn = document.querySelectorAll('#macromolecules-btn');
        //const dnaBtn = document.querySelectorAll('#dnarna-btn');

        homeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                loadPage('home');
            })
        })

        waterBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                loadPage('water');
            })
        })

        macromoleculesBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                loadPage('macro');
            })
        })
    };

    const createDom = (type, classList, idName) => {
        const dom = document.createElement(type);
        if(classList != null){
            dom.classList.add(classList);
        }
        if(idName != null){
            dom.id = idName;
        }
        return(dom);
    };

    const clearContent = () => {
        const content = document.querySelector('.content');
        content.innerHTML = ``;
    };

    const loadPage = (type) => {
        clearContent();

        if(type === 'home'){loadHome.loadHomePage();}

        if(type === 'water'){loadWaterPage();}

        if(type === 'macro'){loadMacroPage();}

        domEvents();
    };

    return { createDom, clearContent, domEvents };
})();

export default dom;