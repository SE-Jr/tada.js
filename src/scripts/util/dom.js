const dom = {
    getElements: (selector) => document.getElementsByClassName(selector),
    addClass: (elTarget, className) => {
        elTarget.classList.add(className)
    }
};

export default dom;