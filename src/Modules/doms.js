const domEvents = (() => {

    const createDom = (type, classList, idName) => {
        const dom = document.createElement(type);
        if(classList != null){
            dom.classList.add(classList);
        }
        if(idName != null){
            dom.id = idName;
        }
        return(dom);
    }

    return { createDom }
})();

export default domEvents;