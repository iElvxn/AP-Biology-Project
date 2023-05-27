import loadHome from "./home";
import loadWaterPage from "./water";
import loadMacroPage from "./macromolecules";

const dom = (() => {

    const domEvents = () => {
        const homeBtn = document.querySelectorAll('#home-btn');
        const waterBtn = document.querySelectorAll('#water-btn');
        const macromoleculesBtn = document.querySelectorAll('#macromolecules-btn');
        //const dnaBtn = document.querySelectorAll('#dnarna-btn');

        const track = document.querySelector('.card-track')

        window.onmousedown = (e) => {
            track.dataset.mouseDownAt = e.clientX;
        }

        window.onmouseup = (e) => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;  
        }

        window.onmousemove = (e) => {
            event.preventDefault()

            if(track.dataset.mouseDownAt === "0"){
                return;
            }
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
            console.log(nextPercentage)
            if(nextPercentage <= -60){
                nextPercentage = -60;
            }
            if(nextPercentage >= 10){
                nextPercentage = 10;
            }
            

            track.dataset.percentage = nextPercentage;
            track.style.transform = `translate(${nextPercentage}%, 0%)`;
        }

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