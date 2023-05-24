import loadHome from "./home";
import loadWaterPage from "./water";

const dom = (() => {

    const domEvents = () => {
        const homeBtn = document.querySelectorAll('#home-btn');
        const waterBtn = document.querySelectorAll('#water-btn');
        //const macromoleculesBtn = document.querySelector('#macromolecules-btn');
        //const dnaBtn = document.querySelector('#dnarna-btn');

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

        if(type === 'home'){
            loadHome.loadHomePage();
            domEvents();
        }

        if(type === 'water'){
            loadWaterPage();
            domEvents();
        }
    };

    return { createDom, clearContent, domEvents };
})();

export default dom;