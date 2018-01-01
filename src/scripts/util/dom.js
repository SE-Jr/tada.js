const dom = {
    addClass: (elTarget, className) => {
        elTarget.classList.add(className)
    },
    createElement: (type) => document.createElement(type),
    getElements: (selector) => document.getElementsByClassName(selector),
    getChildren: (parent, childrenTagName) => parent.getElementsByTagName(childrenTagName),
    setStyle: (element, property, value) => {
        element.style[property] = value;
    }
};

export default dom;