const dom = {
    createElement: (type) => document.createElement(type),
    getElements: (selector) => document.getElementsByClassName(selector),
    addClass: (elTarget, className) => {
        elTarget.classList.add(className)
    }
};

export default dom;